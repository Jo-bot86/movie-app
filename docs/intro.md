# *MERN-Stack*

I want to create a full-stack movie application using the MERN-Stack.

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
