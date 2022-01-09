# Myproject details---
 
Procedure & Steps to run the project :-Ts files generate :-
1. Run 'npm i' to install all the node_modules.
2. Run 'npm run typeorm migration:run' to generate tables in database with columns ,&'npm run generate-migration' to transpile the typescript code into javascript and generate new migrations( creating tables in schema ) when update columns in tables.
3. Run 'npm run start' to run the server.
4. Now apis can be tested through Postman & postgres database.
5. Covering all the api's firstly of user data i.e-login,signup,forgot password etc. (covering in the module of users route,controller,services along with that info link with its repo files,config file ,type file & validator).
6. Covering reminders api's in module Reminder (routes,controllers & services also with its repo files.)
7. Also having (.env) file in it with all the details of database connectivity & secret configurations etc.

Main file code- (src folder.....) having all the modules further like (routes,controllers,services , database-models &migrations,repostories,middleware,config , type files etc)
