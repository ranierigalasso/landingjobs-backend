const express = require('express');
const router = express.Router();
const Politician = require('../models/politician');
const Event = require('../models/event');

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Event.find({politicianId: id})
    .then((data) => {
      res.status(200);
      res.json(data);
    })
    .catch(next)
});

router.post('/create', (req, res, next) => { 
  const { eventDate, eventType, politicianId } = req.body;
  let binaryEvent = '';
  if(eventType === 'Go to Jail') {
    binaryEvent = 'InJail'
  } else {
    binaryEvent = 'OutJail'
  }
  const event = {
    politicianId,
    eventType: binaryEvent,
    eventDate,
  }
  Politician.findOne({_id:politicianId})
    .then((data) => {
      if(data.isInJail === true && binaryEvent === 'InJail') {

      } else if (data.isInJail === false && binaryEvent === 'OutJail') {

      } else {
        Event.create(event)
        .then((data) => {
          res.status(200);
          res.json(data);
          if(binaryEvent === 'InJail') {
            Politician.findByIdAndUpdate({_id: politicianId},{isInJail:true},{new:true})
              .then(()=>{
              })
              .catch(next)
          } else {
            Politician.findByIdAndUpdate({_id: politicianId},{isInJail:false},{new:true})
              .then(()=>{
              })
              .catch(next)
          }
        })
        .catch(next);
      }
    })
    .catch(next)
})


module.exports = router;
