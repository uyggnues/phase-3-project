class User < ActiveRecord::Base
    has_many :posts
    has_many :comments, through: :posts
    
    def create_account(first_name, last_name, username, password, email)
        User.create(first_name: first_name, last_name: last_name, username: username, password: password, email: email)
    end
    
    def self.login(username, password)
        self.all.find_by(username: username, password: password)
    end
end