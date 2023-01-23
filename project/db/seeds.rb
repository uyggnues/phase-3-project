
User.delete_all
Post.delete_all
Comment.delete_all

puts "creating users"
5.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::FunnyName.unique.name, password: Faker::Verb.unique.base, email: Faker::GreekPhilosophers.name + "@email.com")
end

puts "creating posts/comments"
10.times do 
    p1 = Post.create(caption: Faker::Quote.fortune_cookie, date: Faker::Date.between(from: 10.years.ago, to: Date.today), likes: Faker::Number.number(digits:2), image: Faker::LoremFlickr.image, user: User.all.sample)
    10.times do
        Comment.create(comment: Faker::Quote.famous_last_words, post: p1, user: User.all.sample)
    end
end

# puts "creating comments"


puts "done seeding"
