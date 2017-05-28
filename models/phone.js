var mongoose = require('mongoose');

var phoneSchema = new mongoose.Schema({
  brand: { type: String },
  name: { type: String },
  image: { type: String },
  specs: { type: Array, default: [] }
})

var Phone = mongoose.model('Phone', phoneSchema );

module.exports = Phone;
