#Installations
1. Node js and npm (check installations with node -v and npm -v)
2. run "npm install -g typescript" to isntall typescrit (check installation with tsc -v)


#Commands to run the roject 

1. run "npm install" (to instal node_modules)
2. run "tsc" (to comile the typescript code to Java scrit)
3. run "npm start" (to run the project)

#Login 
1. Create a POST request , send this json

{
    "email": "ariel_leon55@outlook.com",
    "password": 123
}

the url is: http://localhost:3000/login

2. Get the response, you will get a token (copy the token) 
3. create a GET request and use this url http://localhost:3000/data
4. create the header called "x-token" and give the value of the token
5. send the request and see the results
