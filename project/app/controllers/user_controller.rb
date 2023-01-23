require './config/environment'

class UserController < Sinatra::Base

    configure do
        set :public_folder, 'public'
        set :views, 'app/views'
    end

    get '/users' do
        user = User.all
        user.to_json 
    end

    get "/users/:id" do
        user = User.find_by(id: params[:id])
        user .to_json
    end

    post '/users' do
        user = User.create(params)
        user.to_json
    end

    # UPDATE
    patch '/users/:id' do
        user = User.find(params[:id])
        user.update(amount: params[:amount])
        user.to_json
    end

    # DELETE
    delete '/users/:id' do
        user = User.find(params[:id])
        user.destroy
        user.to_json
    end

end