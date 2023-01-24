class User < ActiveRecord::Base
    has_many :posts
    has_many :comments, through: :posts
    # validates :first_name, :last_name, :username, :password, presence: true
end