# test the rest server that is hosted in HEROKU
https://rest-server-typescript.herokuapp.com/login
Create POST request, send this JSON
{
    "email": "ariel_leon55@outlook.com",
    "password": 123
}


# Installation

1. Node js and npm (check installations with node -v and npm -v)
2. Execute "npm install -g typescript" to isntall typescrit (check installation with tsc -v)


# Commands to execute the project 

1. Execute "npm install" (to instal node_modules)
2. Execute "tsc" (to comile the typescript code to Java scrit)
3. Execute "npm start" (to run the project)

# Login 
1. Create a POST request , send this json

{
    "email": "ariel_leon55@outlook.com",
    "password": 123
}

the url is: http://localhost:3000/login    and the port is 3000

2. Get the response, you will get a token (copy the token) 
3. create a GET request and use this url http://localhost:3000/data
4. create the header called "x-token" and give the value of the token
5. send the request and see the results
