# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_30_180540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.string "trackable_type"
    t.bigint "trackable_id"
    t.string "owner_type"
    t.bigint "owner_id"
    t.string "key"
    t.text "parameters"
    t.string "recipient_type"
    t.bigint "recipient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id", "owner_type"], name: "index_activities_on_owner_id_and_owner_type"
    t.index ["owner_type", "owner_id"], name: "index_activities_on_owner_type_and_owner_id"
    t.index ["recipient_id", "recipient_type"], name: "index_activities_on_recipient_id_and_recipient_type"
    t.index ["recipient_type", "recipient_id"], name: "index_activities_on_recipient_type_and_recipient_id"
    t.index ["trackable_id", "trackable_type"], name: "index_activities_on_trackable_id_and_trackable_type"
    t.index ["trackable_type", "trackable_id"], name: "index_activities_on_trackable_type_and_trackable_id"
  end

  create_table "challenge_participants", force: :cascade do |t|
    t.integer "user_id"
    t.integer "challenge_id"
    t.string "confirmation_code"
    t.string "status"
    t.integer "kills"
    t.integer "deaths"
    t.integer "score"
    t.string "result"
    t.string "side"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["challenge_id"], name: "index_challenge_participants_on_challenge_id"
    t.index ["user_id"], name: "index_challenge_participants_on_user_id"
  end

  create_table "challenges", force: :cascade do |t|
    t.integer "game_id"
    t.string "kind"
    t.integer "slots_per_team"
    t.string "status"
    t.datetime "start_date"
    t.string "server_ip"
    t.string "rcon_pwd"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tournament_id"
    t.index ["game_id"], name: "index_challenges_on_game_id"
    t.index ["tournament_id"], name: "index_challenges_on_tournament_id"
  end

  create_table "featureds", force: :cascade do |t|
    t.string "name"
    t.boolean "active"
    t.date "start_date"
    t.date "end_date"
    t.integer "tournament_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tournament_id"], name: "index_featureds_on_tournament_id"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "game_modes", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "mode_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_game_modes_on_game_id"
    t.index ["mode_id"], name: "index_game_modes_on_mode_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "slug"
    t.index ["slug"], name: "index_games_on_slug", unique: true
  end

  create_table "map_tournaments", force: :cascade do |t|
    t.bigint "tournament_id"
    t.bigint "map_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["map_id"], name: "index_map_tournaments_on_map_id"
    t.index ["tournament_id"], name: "index_map_tournaments_on_tournament_id"
  end

  create_table "maps", force: :cascade do |t|
    t.string "name"
    t.bigint "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_maps_on_game_id"
  end

  create_table "match_scores", force: :cascade do |t|
    t.integer "left_score"
    t.integer "right_score"
    t.bigint "map_id"
    t.bigint "match_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["map_id"], name: "index_match_scores_on_map_id"
    t.index ["match_id"], name: "index_match_scores_on_match_id"
  end

  create_table "matches", force: :cascade do |t|
    t.integer "state"
    t.integer "left_score"
    t.integer "right_score"
    t.integer "round"
    t.bigint "tournament_id"
    t.bigint "left_team_id"
    t.bigint "right_team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "next_match_id"
    t.index ["left_team_id"], name: "index_matches_on_left_team_id"
    t.index ["next_match_id"], name: "index_matches_on_next_match_id"
    t.index ["right_team_id"], name: "index_matches_on_right_team_id"
    t.index ["tournament_id"], name: "index_matches_on_tournament_id"
  end

  create_table "modes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "region_tournaments", force: :cascade do |t|
    t.bigint "region_id"
    t.bigint "tournament_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["region_id"], name: "index_region_tournaments_on_region_id"
    t.index ["tournament_id"], name: "index_region_tournaments_on_tournament_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "continent"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "requests", force: :cascade do |t|
    t.string "status"
    t.integer "user_id", null: false
    t.integer "team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "target"
    t.integer "roster_id"
    t.index ["roster_id"], name: "index_requests_on_roster_id"
    t.index ["team_id"], name: "index_requests_on_team_id"
    t.index ["user_id"], name: "index_requests_on_user_id"
  end

  create_table "roster_tournaments", force: :cascade do |t|
    t.integer "roster_id"
    t.integer "tournament_id"
    t.datetime "confirmed_subscribtion_at"
    t.index ["roster_id"], name: "index_roster_tournaments_on_roster_id"
    t.index ["tournament_id"], name: "index_roster_tournaments_on_tournament_id"
  end

  create_table "roster_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "roster_id"
    t.index ["roster_id"], name: "index_roster_users_on_roster_id"
    t.index ["user_id"], name: "index_roster_users_on_user_id"
  end

  create_table "rosters", force: :cascade do |t|
    t.integer "team_id"
    t.string "name"
    t.integer "game_id"
    t.integer "limit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_rosters_on_game_id"
    t.index ["team_id"], name: "index_rosters_on_team_id"
  end

  create_table "seasons", force: :cascade do |t|
    t.integer "number"
    t.date "start_date"
    t.date "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "game_id"
    t.index ["game_id"], name: "index_seasons_on_game_id"
  end

  create_table "services", force: :cascade do |t|
    t.bigint "user_id"
    t.string "provider"
    t.string "uid"
    t.string "access_token"
    t.string "access_token_secret"
    t.string "refresh_token"
    t.datetime "expires_at"
    t.text "auth"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "website"
    t.text "description"
    t.string "slug"
    t.integer "owner_id"
    t.index ["slug"], name: "index_teams_on_slug", unique: true
  end

  create_table "tournament_team_participants", force: :cascade do |t|
    t.integer "tournament_team_id"
    t.integer "user_id"
    t.datetime "confirmed_participation_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tournament_team_id"], name: "index_tournament_team_participants_on_tournament_team_id"
    t.index ["user_id"], name: "index_tournament_team_participants_on_user_id"
  end

  create_table "tournament_teams", force: :cascade do |t|
    t.integer "tournament_id"
    t.string "roster"
    t.boolean "is_private"
    t.string "invitation_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tournament_id"], name: "index_tournament_teams_on_tournament_id"
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "start_date"
    t.date "end_date"
    t.string "status"
    t.boolean "active"
    t.integer "slots"
    t.integer "user_id"
    t.integer "season_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "game_id", null: false
    t.integer "prize"
    t.integer "entry_fee"
    t.string "slug"
    t.bigint "mode_id"
    t.bigint "region_id"
    t.text "rules"
    t.index ["game_id"], name: "index_tournaments_on_game_id"
    t.index ["mode_id"], name: "index_tournaments_on_mode_id"
    t.index ["region_id"], name: "index_tournaments_on_region_id"
    t.index ["season_id"], name: "index_tournaments_on_season_id"
    t.index ["slug"], name: "index_tournaments_on_slug", unique: true
    t.index ["user_id"], name: "index_tournaments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "username"
    t.string "slug"
    t.integer "team_id"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["slug"], name: "index_users_on_slug", unique: true
    t.index ["team_id"], name: "index_users_on_team_id"
  end

  create_table "users_teams", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "team_id", null: false
    t.string "status"
    t.datetime "left_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["team_id"], name: "index_users_teams_on_team_id"
    t.index ["user_id"], name: "index_users_teams_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "challenges", "tournaments"
  add_foreign_key "featureds", "tournaments"
  add_foreign_key "game_modes", "games"
  add_foreign_key "game_modes", "modes"
  add_foreign_key "map_tournaments", "maps"
  add_foreign_key "map_tournaments", "tournaments"
  add_foreign_key "maps", "games"
  add_foreign_key "match_scores", "maps"
  add_foreign_key "match_scores", "matches"
  add_foreign_key "matches", "matches", column: "next_match_id"
  add_foreign_key "matches", "rosters", column: "left_team_id"
  add_foreign_key "matches", "rosters", column: "right_team_id"
  add_foreign_key "matches", "tournaments"
  add_foreign_key "region_tournaments", "regions"
  add_foreign_key "region_tournaments", "tournaments"
  add_foreign_key "rosters", "games"
  add_foreign_key "rosters", "teams"
  add_foreign_key "tournament_team_participants", "tournament_teams"
  add_foreign_key "tournament_team_participants", "users"
  add_foreign_key "tournament_teams", "tournaments"
  add_foreign_key "tournaments", "modes", column: "mode_id"
  add_foreign_key "tournaments", "regions", column: "region_id"
end
