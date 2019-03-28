const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const eventSchema = new mongoose.Schema({
  politicianId:{
    type: ObjectId,
    ref: 'Politician',
  },
  eventType:{
    type: String,
    enum: [
      'InJail',
      'OutJail',
    ]
  },
  eventDate: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;