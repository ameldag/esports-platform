require 'test_helper'

class TeamControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  test "should get index" do
    sign_in users(:one)
    get (teams_path)
    assert_response :success
  end

  test "should get show" do
    sign_in users(:one)
    get (show_team_path(teams(:one)))
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get (edit_team_path(teams(:one)))
    assert_response :success
  end

  test "should get create" do
    sign_in users(:one)
    get (new_team_path)
    assert_response :success
 
    post (send_new_team_path),
    params: {name: "nrg"}
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

end
