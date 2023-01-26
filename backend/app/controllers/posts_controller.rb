require 'pry'

class PostsController < ApplicationController

    get '/posts' do
        Post.order(date: :desc).to_json(include: [:comments])
    end

    get "/posts/:id/comments" do
        post = Post.find_by(id: params[:id])
        post&.comments.to_json
    end

    post '/posts' do
        # binding.pry
        post = Post.create(params)
        post.to_json
    end

    # UPDATE
    patch '/posts/:id/increment' do
        # binding.pry
        post = Post.find(params[:id])
        post.update(likes: post.likes + 1)
        post.to_json
    end

    patch '/posts/:id/decrement' do
        # binding.pry
        post = Post.find(params[:id])
        post.update(likes: post.likes - 1)
        post.to_json
    end

    # DELETE
    delete '/posts/:id' do
        post = Post.find(params[:id])
        post.destroy
        post.to_json
    end

end