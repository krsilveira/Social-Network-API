const { connect, connection } = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

connect(uri, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB') ) 
.catch(err => console.error(err.message));


//module export
module.exports = connection;
