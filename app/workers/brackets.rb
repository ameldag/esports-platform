class Brackets
    include Sidekiq::Worker
  
    def perform()
      # do something
      @tournaments = Tournament.where('start_date = ?', Date.today).all
      @tournaments.each do |tournament |
        
      end 
    end
  end