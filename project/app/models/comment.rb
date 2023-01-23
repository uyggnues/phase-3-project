class Comment < ActiveRecord::Base
    belongs_to :post
    

    def comment(comment)
        Comment.create(comment: comment, post: post.id, user: user.id)
    end

end