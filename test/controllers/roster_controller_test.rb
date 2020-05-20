require 'test_helper'

class RosterControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get roster_list_url
    assert_response :success
  end

  test "should get show" do
    get roster_show_url
    assert_response :success
  end

  test "should get join" do
    get roster_join_url
    assert_response :success
  end

  test "should get quit" do
    get roster_quit_url
    assert_response :success
  end

  test "should get add" do
    get roster_add_url
    assert_response :success
  end

  test "should get edit" do
    get roster_edit_url
    assert_response :success
  end

  test "should get update" do
    get roster_update_url
    assert_response :success
  end

  test "should get new" do
    get roster_new_url
    assert_response :success
  end

  test "should get create" do
    get roster_create_url
    assert_response :success
  end

  test "should get delete" do
    get roster_delete_url
    assert_response :success
  end

end
