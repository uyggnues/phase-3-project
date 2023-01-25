class User < ActiveRecord::Base
    has_many :posts
    has_many :comments, through: :posts
    # validates :first_name, :last_name, :username, :password, presence: true

    has_secure_password #password, password=, password_confirmation, password_confirmation=, authenticate

    #validations
    validates :username, presence: true, length: {in: 4..25}
    #validates :email, presence: true, uniqueness: true, format: {with: /\A()}
    validates :password, length: {in: 6..25}
end