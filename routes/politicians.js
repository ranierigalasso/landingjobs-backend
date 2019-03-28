const express = require('express');
const router = express.Router();
const Politician = require('../models/politician');
const {updateSuperior} = require('../helpers');

router.get('/politicians', (req, res, next) => {
  Politician.find({isInJail: false})
    .populate('superiorId')
    .then((politicianList) => {
      res.status(200);
      res.json(politicianList);
    })
    .catch(next)
});

router.get('/politicians-jail', (req, res, next) => {
  Politician.find({isInJail: true})
    .populate('superiorId')
    .then((politicianList) => {
      res.status(200);
      res.json(politicianList);
    })
    .catch(next)
});


router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Politician.findOne({ _id: id })
    .populate('superiorId')
    .populate('subordinates')
    .then((politician) => {
      res.status(200);
      res.json(politician);
    })
    .catch(next)
});

router.post('/create', (req, res, next) => {
  const { name, joinDate, superior } = req.body;
  Politician.findOne({ name: superior })
    .then((superior) => {
      const politician = {
        name,
        joinDate,
        superiorId: superior._id,
      }
      Politician.create(politician)
        .then((data) => {
          let newPolitician = data._id;
          let superiorID = data.superiorId;
          Politician.find({subordinates: {$in: [superior._id]}})
            .then((response) => {
              console.log(response)
              response.forEach((politician) => {
                updateSuperior(politician._id,newPolitician)
                  .then(() => {
                    console.log('updated all other')
                  })
                  .catch(next)
              })
              updateSuperior(superiorID,newPolitician)
                .then((data) => {
                  console.log('superior update')
                  res.status(200);
                  res.json(data);
                })
                .catch(next)
            })
            .catch(next);
      
        })
        .catch(next)
    })
    .catch(next)
});

module.exports = router;
