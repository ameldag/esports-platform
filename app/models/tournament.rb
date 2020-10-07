require "securerandom"

class Tournament < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :season
  belongs_to :game

  has_many :tournament_teams

  has_many :roster_tournaments
  has_many :rosters, through: :roster_tournaments

  belongs_to :mode

  has_many :region_tournaments
  has_many :regions, through: :region_tournaments

  has_many :map_tournaments
  has_many :maps, through: :map_tournaments

  has_many :challenge
  has_one_attached :cover, dependent: :destroy

  has_many :match

  validates :season, presence: true
  validates :game, presence: true
  scope :tournaments, ->(active) { where("active = ?", active) }
  scope :ongoing_tournaments, ->(active, game_id) { where("active = ? and game_id = ?", active, game_id) }
  scope :similar_tournaments, ->(game_id) { where("game_id = ?", game_id).last(4) }

  

  def shouldcreatebracket
    return (RosterTournament.joins(:tournament).where('tournament_id = ?', self.id).where.not(confirmed_subscribtion_at: nil).count) == self.slots
  end

  def createMatch
    return if !self.shouldcreatebracket
    ActiveRecord::Base.transaction do
        roundArray = []
        subscribtion_rosters = RosterTournament.joins(:tournament).where('tournament_id = ?', self.id).where.not(confirmed_subscribtion_at: nil) 
        subscribtion_rosters.shuffle
        subscribtion_rosters.each_slice(2){ |a| 
          new_match = self.match.create({
          :round => 1,
          :next_match_id => nil,
          left_team: a[0].roster,
          right_team: a[1].roster
          })
          roundArray << new_match
        }
        loop do           
          newRoundArray = []
          roundArray.each_slice(2){ |match_couple| 
            new_match = self.match.create({
            :round => match_couple[0].round + 1
            })
            
            match_couple[0].update_attribute(:next_match_id, new_match.id)
            match_couple[1].update_attribute(:next_match_id, new_match.id)
            newRoundArray << new_match

          }
          roundArray = newRoundArray
          break if (roundArray.length <= 1)
        end
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
