require './config/environment'

class ApplicationController < Sinatra::Base

    configure do
        set :public_folder, 'public'
        set :views, 'app/views'
    end

    get '/comment' do
        comment = Comment.all
        comment.to_json 
    end

    get "/comment/:id" do
        comment = Comment.find(params[:id])
        comment .to_json
    end

    post '/comment' do
        comment = Comment.create(params)
        comment.to_json
    end

    # UPDATE
    patch '/comment/:id' do
        comment = Comment.find(params[:id])
        comment.update(amount: params[:amount])
        comment.to_json
    end

    # DELETE
    delete '/comment/:id' do
        comment = Comment.find(params[:id])
        comment.destroy
        comment.to_json
    end

end