class User < ActiveRecord::Base[5.2]
    has_many :posts
    has_many :comments, through: :posts
end