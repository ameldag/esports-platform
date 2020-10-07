require 'rails_helper'

RSpec.describe ChallengeController, type: :controller do

  describe "GET #show" do
    it "returns http success" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #participants" do
    it "returns http success" do
      get :participants
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #feed" do
    it "returns http success" do
      get :feed
      expect(response).to have_http_status(:success)
    end
  end

end
