require './config/environment'

class CommentsController < ApplicationController

    get '/comments' do
        comment = Comment.all.sort_by(&:created_at)
        comment.to_json
    end

    post '/comments' do
        # binding.pry
        comment = params[:comment]
        post = Post.find_by(id: params[:post_id])
        user = User.find_by(username:  params[:username])
        Comment.create(comment: comment, post: post, user: user, username: params[:username])
        # binding.pry
        post.to_json
    end

    # UPDATE
    patch '/comments/:id' do
        comment = Comment.find(params[:id])
        comment.update(amount: params[:amount])
        comment.to_json
    end

    # DELETE
    delete '/comments/:id' do
        comment = Comment.find(params[:id])
        comment.destroy
        comment.to_json
    end

end