class Post < ActiveRecord::Base
    has_many :comments, dependent: :destroy
    belongs_to :user

    def create_post(caption, image)
        Post.create(caption: caption, date: Date.today, likes: 0, image: image, user: user.id)
    end

    def pull_post
        self.all.where(user: user.id)
    end

    def update_post(caption)
        Post.update(caption: caption)
    end

    def delete_post
        self.destroy
    end
end