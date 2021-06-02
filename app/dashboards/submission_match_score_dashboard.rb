require "administrate/base_dashboard"

class SubmissionMatchScoreDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    match: Field::BelongsTo,
    user: Field::BelongsTo,
    roster: Field::BelongsTo,
    image_attachment: Field::HasOne,
    image_blob: Field::HasOne,
    id: Field::Number,
    comment: Field::Text,
    score: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    match
    user
    roster
    image_attachment
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    match
    user
    roster
    image_attachment
    image_blob
    id
    comment
    score
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    match
    user
    roster
    image_attachment
    image_blob
    comment
    score
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

  # Overwrite this method to customize how submission match scores are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(submission_match_score)
  #   "SubmissionMatchScore ##{submission_match_score.id}"
  # end
end
