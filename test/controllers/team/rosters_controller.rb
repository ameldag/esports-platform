require 'test_helper'

class Team::RostersController < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  test "should get list" do
    sign_in users(:one)
    get team_rosters_path(teams(:one))
    assert_response :success
  end

  test "should get show" do
    sign_in users(:one)
    get team_show_roster_path(teams(:one) , rosters(:one))
    assert_response :success
  end

  test "should get join" do
    sign_in users(:one)
    get team_join_roster_path(rosters(:one))
    
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

  test "should get quit" do
    sign_in users(:one)
    get team_quit_roster_path(rosters(:one))
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

  # test "should get add" do
  #   get roster_add_url
  #   assert_response :success
  # end

  test "should get edit" do
    sign_in users(:one)
    get (team_new_roster_path(rosters(:one)))
    assert_response :success
 
    put (team_update_roster_path(rosters(:one))),
    params: {status: "accepted"}
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

  # test "should get update" do
  #   get roster_update_url
  #   assert_response :success
  # end

  # test "should get new" do
  #   get roster_new_url
  #   assert_response :success
  # end

  # test "should get create" do
  #   sign_in users(:one)
  #   get (new_roster_path)
  #   assert_response :success
 
  #   post (send_new_roster_path),
  #   params: {name: "nrg_roster"}
  #   assert_response :redirect
  #   follow_redirect!
  #   assert_response :success
  # end

  test "should get delete" do
    sign_in users(:one)
    get team_delete_roster_path(rosters(:one))
    assert_response :redirect
    follow_redirect!
    assert_response :success
  end

end
