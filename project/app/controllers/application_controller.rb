require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :default_content_type, :json
    set :views, 'app/views'
  end

  # error ActiveRecord::RecordNotFound do
  #   "Record could not be found with id #{params.id}".to_json
  # end

  get "/" do
    "welcome"
  end

end
