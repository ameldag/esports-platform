class Request < ApplicationRecord
  belongs_to :user
  belongs_to :team
  belongs_to :roster

  # after_save: :send_notifications , if: saved_change_to_status?

  def accept
    send("accept_#{target}_request")
    self.status = 'accepted'
  end

  def reject
    send("reject_#{target}_request")
    self.status = 'refused'
  end

  private

  def accept_team_request
  end

  def reject_team_request
  end

  def accept_roster_request
    self.user.rosters << roster unless self.user.rosters.exists?(roster)
  end

  def reject_roster_request
  end
  
  # def send_notifications
  #   case self.status
  #   when 'accepted'
  #     # accepted
  #   when 'rejected'
  #     # rejected
  #   end
  # end
end
