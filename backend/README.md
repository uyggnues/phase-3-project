# Snap Shot
The backend part of Snap Shot is responsible for all the information you give out in the webpage. Also all the CRUD action we fetch in the frontend.

## Description
the backend part is will have all the CRUD methods and authentication that allows you to fetch from the frontend, and basically anything interactive and dynamic that goes on in the frontend is supported by the backend to persist and make the functionality work.

## Table Model
![image](/root/development/code/phase-3/phase-3-project/backend/img.png)
## installation
* First Fork and clone repo to local machine.

* Second you will need to cd into the backend file and run 
```
bundle install 
```
to start up the server

* then in your terminal that is cd into backend run
```
bundle exec rake db:migrate
```
to migrate your models 
* after that you will also run
```
bundle exec rake db:seed
```
to seed your faker data 

* Finally run 
```
shotgun
```
to start your backend APIs

## Collaborating

Pull Requests are welcome on [GitHub](https://github.com/uyggnues/phase-3-project). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct/) code of conduct.

## License 
The program is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT)