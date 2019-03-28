const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const Event = require('../models/event');

const events = [
  {eventType: 'InJail', eventDate:'1980-12-08'},
  {eventType: 'OutJail', eventDate:'1982-12-08'},
];

mongoose.connect('mongodb://localhost:27017/landing-politicians', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Event.create(events);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });