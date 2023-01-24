class Post < ActiveRecord::Base
    has_many :comments, dependent: :destroy
    belongs_to :user
    # validates :user, :password, presence: true
end