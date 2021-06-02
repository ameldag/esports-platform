require "administrate/base_dashboard"

class ChallengeDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    game: Field::BelongsTo,
    tournament: Field::BelongsTo,
    challenge_participants: Field::HasMany,
    users: Field::HasMany,
    id: Field::Number,
    kind: Field::String,
    slots_per_team: Field::Number,
    status: Field::String,
    start_date: Field::DateTime,
    server_ip: Field::String,
    rcon_pwd: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    game
    tournament
    challenge_participants
    users
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    game
    tournament
    challenge_participants
    users
    id
    kind
    slots_per_team
    status
    start_date
    server_ip
    rcon_pwd
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    game
    tournament
    challenge_participants
    users
    kind
    slots_per_team
    status
    start_date
    server_ip
    rcon_pwd
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how challenges are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(challenge)
  #   "Challenge ##{challenge.id}"
  # end
end
