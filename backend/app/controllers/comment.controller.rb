require './config/environment'

class CommentController < Sinatra::Base

    configure do
        set :public_folder, 'public'
        set :views, 'app/views'
    end

    get '/comments' do
        comment = Comment.all.sort_by(&:date)
        comment.to_json
    end

    post '/comments' do
        comment = Comment.create(params)
        comment.to_json
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