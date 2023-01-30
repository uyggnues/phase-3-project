class Post < ActiveRecord::Base
    has_many :comments, dependent: :destroy
    belongs_to :user
    # validates :caption, presence: true
    # validates :image, presence: true

end