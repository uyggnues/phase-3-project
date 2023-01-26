
User.delete_all
Post.delete_all
Comment.delete_all

# puts "creating users"
#     u1 = User.create(first_name: "seunggyu", last_name: "lee", username: "oogy", password: "hello11", email: "oogy@email.com")

# puts "creating posts/comments"
#     p1 = Post.create(caption: "look at me go!", date: Date.today, likes: 302, user: u1)

    
# puts "creating comments"
#     c1 = Comment.create(comment: "LOL", post: p1, user: u1)


# puts "done seeding"

puts "creating users"
    u1 = User.create(first_name: "seunggyu", last_name: "lee", username: "oogy", password: "hello11", email: "oogy@email.com")
    u2 = User.create(first_name: "andrew", last_name: "forest", username: "aforest", password: "password", email: "aforest41@yahoo.com")

puts "creating posts/comments"
    10.times do
        u = User.all.sample
        p = Post.create(username: u.username, caption: Faker::Quote.famous_last_words, date: Faker::Date.between(from: 5.years.ago, to:Date.today), likes: rand(1..100), user: u, image: Faker::LoremFlickr.image)
        10.times do
            user = User.all.sample
            Comment.create(comment: Faker::Quote.yoda, post: p, user: user, username: user.username)
        end
    end