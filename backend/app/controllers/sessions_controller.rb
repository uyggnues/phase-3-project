
class SessionsController < ApplicationController
    post "/login" do
        user = User.find_by_username(params[:username])
        # binding.pry
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            halt 200, {user: user}.to_json
        else
            halt 400, {message: "Invalid credentials!"}.to_json
        end
    end

    delete "/logout" do 
        delete session[:user_id]
        halt 200, {message: "Logged Out"}.to_json
    end
end