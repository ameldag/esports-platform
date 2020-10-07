require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "ensure name" do
    team = Team.new
    assert_not team.save
  end
end
