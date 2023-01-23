require './config/environment'

class PostController < Sinatra::Base

    configure do
        set :public_folder, 'public'
        set :views, 'app/views'
    end

    get '/posts' do
        post = Post.all
        post.to_json 
    end

    get "/posts/:id" do
        post = Post.find_by(id: params[:id])
        post.to_json
    end

    post '/posts' do
        post = Post.create(params)
        post.to_json
    end

    # UPDATE
    patch '/posts/:id' do
        post = Post.find(params[:id])
        post.update(amount: params[:amount])
        post.to_json
    end

    # DELETE
    delete '/posts/:id' do
        post = Post.find(params[:id])
        post.destroy
        post.to_json
    end

end