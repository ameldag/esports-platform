require 'rails_helper'

RSpec.describe User, type: :model do
  
  context 'validation tests' do
  
    it 'ensure username 'do 
      user = User.new(:one).save
      expect(user).to eq(false)
    end 

    it 'ensure email 'do 
      user = User.new(:two).save
      expect(user).to eq(false)
    end 

    it 'should save 'do 
    user = User.new(username: 'jacer', email: 'jacer@gmail.com', password:'motdepasse').save
    expect(user).to eq(true)
    end 
  end 
  
  context 'scope tests' do
  
  end 
end
