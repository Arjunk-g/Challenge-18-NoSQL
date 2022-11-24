const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
// const db = require('./config/connection');
// const routes = require('./routes');
const mongodb = require('mongodb').MongoClient;
const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://localhost:3001/social-api-challenge`;

// Declare a variable to hold the connection
// let db;


mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
    app.listen(port, () => {
      console.log(`Example app listening at mongodb://localhost:3001/social-api-challenge`);
    })
);

app.use(express.json());