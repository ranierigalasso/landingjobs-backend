const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const politicianSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    unique: true,
  },
  joinDate: {
    type: String,
    required: true,
  },
  superiorId:{
    type: ObjectId,
    ref: 'Politician',
  },
  subordinates: [{
    type: ObjectId,
    ref: 'Politician',
  }],
  isInJail:{
    type: Boolean,
    default: false,
  }
});

const Politician = mongoose.model('Politician', politicianSchema);

module.exports = Politician;
