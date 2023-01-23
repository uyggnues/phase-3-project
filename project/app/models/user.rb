class User < ActiveRecord::Base
    has_many :posts
    has_many :comments, through: :posts

    def self.login(username, password)
        self.all.find_by(username: username, password: password)
    end
end