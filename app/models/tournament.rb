require 'securerandom'
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

  has_one_attached :cover, dependent: :destroy

  validates :season, presence: true
  validates :game, presence: true


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
