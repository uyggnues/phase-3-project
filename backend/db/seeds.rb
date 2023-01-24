
User.delete_all
Post.delete_all
Comment.delete_all

puts "creating users"
    u1 = User.create(first_name: "seunggyu", last_name: "lee", username: "oogy", password: "hello11", email: "oogy@email.com")

puts "creating posts/comments"
    p1 = Post.create(caption: "look at me go!", date: Date.today, likes: 302, user: u1)
    
    
puts "creating comments"
    c1 = Comment.create(comment: "LOL", post: p1, user: u1)


puts "done seeding"
