require "administrate/base_dashboard"

class UserDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    tournament_team_participants: Field::HasMany,
    requests: Field::HasMany,
    team: Field::BelongsTo,
    roster_users: Field::HasMany,
    rosters: Field::HasMany,
    challenge_participants: Field::HasMany,
    challenges: Field::HasMany,
    services: Field::HasMany,
    id: Field::Number,
    first_name: Field::String,
    last_name: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    email: Field::String,
    encrypted_password: Field::String,
    reset_password_token: Field::String,
    reset_password_sent_at: Field::DateTime,
    remember_created_at: Field::DateTime,
    username: Field::String,
    slug: Field::String,
    provider: Field::String,
    uid: Field::String,
    admin: Field::Boolean,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    first_name
    last_name
    email
    username
    team
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    tournament_team_participants
    requests
    team
    roster_users
    rosters
    challenge_participants
    challenges
    services
    id
    first_name
    last_name
    created_at
    updated_at
    email
    encrypted_password
    reset_password_token
    reset_password_sent_at
    remember_created_at
    username
    slug
    provider
    uid
    admin
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    tournament_team_participants
    requests
    team
    roster_users
    rosters
    challenge_participants
    challenges
    services
    first_name
    last_name
    email
    encrypted_password
    reset_password_token
    reset_password_sent_at
    remember_created_at
    username
    slug
    provider
    uid
    admin
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

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(user)
  #   "User ##{user.id}"
  # end
end
