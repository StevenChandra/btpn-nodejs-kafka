//Set up mongoose connection
console.log("in db config");
const mongoose = require("mongoose");
const mongoDB = "mongodb://13.251.89.132/steven_db";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/
