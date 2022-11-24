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

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },

    app.listen(port, () => {
      console.log(`Example app listening at mongodb://localhost:3001/social-api-challenge`);
    })
  
);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());