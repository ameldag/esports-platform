# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# Game.create(name: 'CS:GO', active: true)
# Game.create(name: 'League of Legends', active: true)
# Game.create(name: 'DOTA 2', active: true)
# Game.create(name: 'PUBG', active: true)

game = Game.find_or_initialize_by(name: 'CSGO')
game.name = 'CSGO'
game.active = true
game.icon.attach(io: File.open(Rails.root.join('db', 'seedFile','csgo_logo.png')), filename: 'csgo_logo.png')
game.cover.attach(io: File.open(Rails.root.join('db', 'seedFile','csgo_cover.jpg')), filename: 'csgo_cover.jpg')
game.save!  

game = Game.find_or_initialize_by(name: 'Dota2')
game.name = 'Dota2'
game.active = true
game.icon.attach(io: File.open(Rails.root.join('db', 'seedFile','dota2_logo.jpg')), filename: 'dota2_logo.jpg')
game.cover.attach(io: File.open(Rails.root.join('db', 'seedFile','dota2_cover.jpg')), filename: 'dota2_logo.jpg')
game.save!  

game = Game.find_or_initialize_by(name: 'Fortnite')
game.name = 'Fortnite'
game.active = true
game.icon.attach(io: File.open(Rails.root.join('db', 'seedFile','fortnite_logo.jpg')), filename: 'fortnite_logo.jpg')
game.cover.attach(io: File.open(Rails.root.join('db', 'seedFile','fortnite_cover.jpg')), filename: 'fortnite_cover.jpg')
game.save! 