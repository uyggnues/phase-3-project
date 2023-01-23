class Post < ActiveRecord::Base
    has_many :comments, dependent: :destroy
    belongs_to :user
    # validates :username, :password 
end