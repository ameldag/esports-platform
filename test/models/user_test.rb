require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "ensure email" do
    user = User.new
    assert_not user.save
  end

  # test "ensure email existing" do
  #   user = User.new
  #   assert user.save
  # end
end
