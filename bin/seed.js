const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
require('dotenv').config();

const Politician = require('../models/politician');

const politicians = [
  {name: 'George Soros', joinDate:'1971-12-08'},
  {name: 'Eleonor Jessin', joinDate:'1980-12-08'},
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Politician.create(politicians);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });