require 'test_helper'

class TournamentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tournaments_index_url
    assert_response :success
  end

  test "should get show" do
    get tournaments_show_url
    assert_response :success
  end

  test "should get subscribe" do
    get tournaments_subscribe_url
    assert_response :success
  end

end
