require './config/environment'
require 'pry'

class UsersController < ApplicationController

    get '/users' do
        user = User.all
        user.to_json 
    end

    get "/users/:id" do
        user = User.find_by(id: params[:id])
        user .to_json
    end

    post "/signup" do
        user = User.create(params)
        if user.id
            sessions[:user_id] = user.id
            halt 201, {user: user}.to_json
        else
            halt 400, {message: user.errors.full_messages.to_sentence}.to_json
        end
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