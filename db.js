let mongoose = require('mongoose');

// Database Connection 
var db = require('./db')
var config = require('./config').development.database

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${config.username}:${config.password}@localhost:27017/${config.db}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
