# *MERN-Stack*

We will create a full-stack movie application from scratch using the MERN-Stack.

This includes:

* **M**ongoDB
* **E**xpress.js
* **R**eact
* **N**ode.js

----------

## MongoDB

[MongoDB](https://www.mongodb.com/2) is a document oriented and NoSQL Database programm. It uses JSON like documents with optional schema.

## Express

[Express](https://expressjs.com/) is a back end web app framework for Node.js. With divers HTTP methods and middle ware functions it is easy to create a powerful API.

## React

[React](https://reactjs.org/) is a JavaScript library for UI's maintained by Facebook.

## Node.js

[Node.js](https://nodejs.org/en/) is a server side runtime built for JavaScript based on Chromes V8 JavaScript engine.

PS: It is recomended to use the editor [VSCode](https://code.visualstudio.com/).

----------

## Setting up the dev env

We will seperate the server and client app. For this purpose we create a folder server and client inside of our project folder. Open the terminal and navigate into your workspace and run the following commands

```cmd
mkdir movie-app
cd movie-app
mkdir client
mkdir server
```

## Client

For the client side we will use React and the following dependencies:

* [*axios*](https://github.com/axios/axios) (for making api requests)
* [*react-file-base64*](https://github.com/BosNaufal/react-file-base64) (convert files into base64)
* [*redux*](https://github.com/reduxjs/redux) (JS library for managing app state)
* [*redux-thunk*](https://github.com/reduxjs/redux-thunk) (for asyncronist action using redux)

To create a react app we navigate into the folder client and run the create-react-app command

```cmd
cd client
npx create-react-app ./
```

then we can install the dependencies via.

```cmd
npm install axios react-file-base64 redux redux-thunk
```

Now we can delete the src folder and create a new one. Then we create a file `index.js` inside the src folder with the following content.

```js
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
```

and a file App.js. In App.js we can simply type `rfc` and press return.
After adding some content the file should look like this.

```js
import React from 'react';

export default function App() {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}
```

Now you can run the command `npm start` inside the client folder to see if everything work.

Perfect! It's time to setup the back end of our movie app.

----------

## Server

For the the server we will use Node.js with the following dependencies.

* [*mongoose*](https://github.com/Automattic/mongoose) (an object modeling tool for MongoDB)
* [*express*](https://github.com/expressjs/express) (framework for creating the routing)
* [*cors*](https://github.com/expressjs/cors) (enables cross origin requests)
* [*nodemon*](https://github.com/expressjs/cors) (for automatically restart the server after a change)

Please navigate into the server folder. Therefor we run the command (in case we are still in the client folder)

```cmd
cd ../server
```

create a index.js and a package.json file and install all the dependencies via

```cmd
cd > index.js
npm init -y
npm install mongoose express cors nodemon
```

NOTE:
Since we are using Express 4.17.1 we can use the [body-parser](https://github.com/expressjs/body-parser) implementation of Express instead of the deprecated body-parser to extract the body portion of an incoming request stream.

### Setup the back-end

TODO:

* connecting the data base to the server
* create a monogodb cluster
* setup a monogodb model
* create some documents

We start by importing the dependencies inside the index.js.

Instead of using the following syntax

```js
const express = require('express');
```

we can use the import syntax as follows

```js
import express from ('express');
import mongoose from ('mongoose');
import cors from ('cors');
```

To enable it we have just to add the following to our package.json file

```json
{
  ...
  "main": "index.js",
  "type": "module",
  ...
}
```

Furthermore we delete the test script and add a start script

```json
{
  ...
  "scripts": {
    "start": "nodemon index.js"
  },
  ...
}
```

## Express Server Application

### Background

Express is a routing and middleware framework. An express app is a series of middleware function calls.

***Middleware*** are those functions/methods/operations which are called between processing the request and sending the response.

***Middleware functions*** are functions that have access to the request object `req` and response object `res` and to the next middleware function in the request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Inside our index.js we can now create the object app which denotes the express app using the express function exported by the express modul.

```js
const app = express();
```

## Middleware

* `express.json()` is a built-in method to convert the incoming request object  to a JSON object.

* `express.urlencoded()` is a built-in method which converts the incoming request object also to a JSON object but can also convert form data into JSON.

This methods are called as a middleware in our app using

```js
app.use(express.json());
app.use(express.urlencoded());
```

**NOTE:** We need this methods just for POST and PUT requests, because in both cases we send data to the server and ask the server to accept or store the data (object) which is enclosed in the body (i.e. `req.body`) of that POST or PUT request.

To enable cross origin requests we add

```js
app.use(cors());
```

**CORS**  is a mechanism that uses additional HTTP headers to tell a browser that it grants permission to a web application running on another domain(origin) to access selected resources from a server of another origin.

## Connecting the database to the server application

## Setup the MongoDB Cluster

We will use [mongodb cloud atlas](https://www.mongodb.com/cloud/atlas1) which means that they are hosting our data base on their cloud. Here we can create a free account which enable us to create a cluster.

After creating a account we click `Build a Cluster` then choose `Shared Cluster` and then just click `Create a Cluster`.
This starts the deployment of our cluster which can take some time.

While deploying we can go to `Database Access` on the left navbar and click on `ADD NEW DATABASE USER`. In here we create our username and password and click `Add User`. This credentials allows us to read and Write to any database.

Now we navigate to `Network Access` and click `ADD IP ADDRESS`.
Then we click `ADD CURRENT IP ADDRESS` and `Confirm`.

Time to go back to `Clusters` and click `CONNECT` after it's deployed. Then we choose `Connect your application` because we want to connect it to our server side express and node application. After that we copy the connection string and go back to our index.js.

Inside index.js we create a new variable

```js
const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.12n34.mongodb.net/mySecondDatabase?retryWrites=true&w=majority';
```

From there we can add the username and password. Make sure to delete also the arrows.

**Important** In real applications we can not put our credentials there because they have to be secure. Before the deployment of the app we will create a enviormental variable and store the credentials there.

Furthermore we create a variable Port.

```js
const PORT = process.env.PORT || 5000;
```

For now our server is listen on port 5000 but later on when we push this to heroku, `process.env.PORT` is gonna populate automatically by heroku.

Finally we gonna use mongoose to connect our app to the database by calling

```js
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));
```

The last thing we need is to make sure to get no warnings in the console.

```js
mongoose.set('useFindAndModify', false);
```

That's it, now we connected successfully the database to our server and the code so far should look like this

```js
import express from ('express');
import mongoose from ('mongoose');
import cors from ('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://<username>:<password>@cluster0.12n34.mongodb.net/mySecondDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
```

To check if everythin works fine we can simply run inside our server directory

```cmd
npm start
```

then we should see the following output in the terminal

```cmd
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server running on http://localhost:5000
```

The next part will be about creating the routes for our back-end application. Therfore we create a new Folder inside server and call it routes,