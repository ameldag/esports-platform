require 'test_helper'

class TeamControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get team_index_url
    assert_response :success
  end

  test "should get show" do
    get team_show_url
    assert_response :success
  end

  test "should get edit" do
    get team_edit_url
    assert_response :success
  end

  test "should get create" do
    get team_create_url
    assert_response :success
  end

end
