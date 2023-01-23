class Post < ActiveRecord::Base[5.2]
    has_many :comments, dependent: :destroy
    belongs_to :user
end