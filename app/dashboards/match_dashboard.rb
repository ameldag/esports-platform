require "administrate/base_dashboard"

class MatchDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    tournament: Field::BelongsTo,
    game: Field::BelongsTo,
    left_team: Field::BelongsTo,
    right_team: Field::BelongsTo,
    next_match: Field::BelongsTo,
    match_score: Field::HasMany,
    match_events: Field::HasMany,
    winner: Field::BelongsTo,
    server: Field::BelongsTo,
    group: Field::BelongsTo,
    round: Field::BelongsTo,
    stage: Field::BelongsTo,
    id: Field::Number,
    state: Field::Select.with_options(searchable: false, collection: ->(field) { field.resource.class.send(field.attribute.to_s.pluralize).keys }),
    left_score: Field::Number,
    right_score: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    planned_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    tournament
    game
    left_team
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    tournament
    game
    left_team
    right_team
    next_match
    match_score
    match_events
    winner
    server
    group
    round
    stage
    id
    state
    left_score
    right_score
    created_at
    updated_at
    planned_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    tournament
    game
    left_team
    right_team
    next_match
    match_score
    match_events
    winner
    server
    group
    round
    stage
    state
    left_score
    right_score
    planned_at
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

  # Overwrite this method to customize how matches are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(match)
  #   "Match ##{match.id}"
  # end
end
