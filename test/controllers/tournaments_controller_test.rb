require 'test_helper'

class TournamentsControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  test "should get show" do
    sign_in users(:one)
    get (show_tournament_path(tournaments(:one)))
    assert_response :success
  end

  # test "should get show" do
  #   get tournaments_show_url
  #   assert_response :success
  # end

  # test "should get subscribe" do
  #   get tournaments_subscribe_url
  #   assert_response :success
  # end

end
