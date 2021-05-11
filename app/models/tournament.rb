require "securerandom"

class Tournament < ApplicationRecord
  include PublicActivity::Model
  tracked owner: ->(controller, model) { controller && controller.current_user }

  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :season
  belongs_to :game

  has_many :tournament_teams

  has_many :roster_tournaments
  has_many :rosters, through: :roster_tournaments

  belongs_to :mode, :class_name => "Mode"

  has_many :region_tournaments
  has_many :regions, through: :region_tournaments

  has_many :map_tournaments
  has_many :maps, through: :map_tournaments

  has_many :challenge
  has_one_attached :cover, dependent: :destroy

  has_many :match

  has_many :featured
  belongs_to :server, :class_name => "Server"
  has_many :stage
  enum status: [:ongoing, :upcoming, :finished, :cancelled]

  validates :season, presence: true
  validates :game, presence: true
  scope :tournaments, ->(active) { where("active = ?", active) }
  scope :active_tournaments, ->(active, game_id) { where("active = ? and game_id = ?", active, game_id) }
  scope :similar_tournaments, ->(game_id) { where("game_id = ?", game_id).last(4) }

  # after_save :add_server_matches

  def shouldcreatebracket
    return (RosterTournament.joins(:tournament).where("tournament_id = ?", self.id).where.not(confirmed_subscribtion_at: nil).count) == self.slots
  end

  def create_matches
    # return if !self.shouldcreatebracket
    ActiveRecord::Base.transaction do
      roundArray = []
      subscribtion_rosters = RosterTournament.joins(:tournament).where("tournament_id = ?", self.id)
      #.where.not(confirmed_subscribtion_at: nil)
      subscribtion_rosters.shuffle
      subscribtion_rosters.each_slice(2) { |a|
        new_match = self.match.create({
          :round_id => Round.find_by(number: 1).id,
          :next_match_id => nil,
          :game_id => self.game_id,
          left_team: a[0].roster,
          right_team: a[1] ? a[1].roster : nil,
          :planned_at => self.planned_at ? self.planned_at : nil,
          server_id: self.server_id,
        })
        roundArray << new_match
      }
      loop do
        newRoundArray = []
        roundArray.each_slice(2) { |match_couple|
          new_match = self.match.create({
            :round_id => Round.find_by(number: match_couple[0].round.number + 1).id,
            :game_id => self.game_id,
            :planned_at => self.round_delay != nil ? match_couple[0].planned_at + (match_couple[0].round.number - 1) * (self.round_delay * 60) : nil,
            server_id: self.server_id,
          })
          match_couple[0].update_attribute(:next_match_id, new_match.id)
          match_couple[1] ? match_couple[1].update_attribute(:next_match_id, new_match.id) : nil
          newRoundArray << new_match
        }
        roundArray = newRoundArray
        break if (roundArray.length <= 1)
      end
    end
  end

  def add_server_matches
    self.match.each do |match_id|
      match_id.update(server: self.server)
    end
  end

  # def participate(@user, @roster, @is_private, @type)
  #   if(@is_private)
  #     @invitation_code = SecureRandom.hex
  #   end
  #   case @type
  #   when '1v1'
  #     Tournament_teams.find_or_create_by(tournament: id) do |tournament_team|
  #       tournament_team.participant = @user
  #   when

  #   else

  #   end
  #   Tournament_teams.find_or_create_by(tournament: id) do |tournament_team|
  #     tournament_team.last_name = 'Johansson'
  #   end

  # end

end
