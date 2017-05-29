var express = require('express');
var router = express.Router();

const Phone = require('../models/phone')

/* GET users listing. */

router.get('/phones', function(req, res, next) {

  Phone.find({}, function(err, phoneList) {
    if( err) {
      res.json(err)
    } else {
      res.status(200).json(phoneList)
    }
  })
});

router.post('/phones', function(req, res, next) {
  var newPhone = new Phone( {
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  } )

  newPhone.save( function(err) {
    if(err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        id: newPhone._id
      })
    }
  })
})

router.get('/phones/:id', function(req, res, next) {

  var id = req.params.id

  Phone.findById( id, function(err, phone){
    if(err){
      res.json(err)
    } else {
      res.json(phone)
    }
  })
})

router.put('/phones/:id', function(req, res, next) {
  var id = req.params.id;
  var phoneToUpdate = {
      brand: req.body.brand,
      name: req.body.name,
      specs: req.body.specs,
      image: req.body.image || ''
    }

  Phone.findByIdAndUpdate(id, phoneToUpdate, function(err){
    if(err) {
      res.json(err)
    } else {
      res.json({message: "updated"})
    }
  })
})

router.delete('/phones/:id', function(req, res, next) {
  var id = req.params.id

  Phone.remove({ _id: id }, function(err){
    if(err) {
      res.json(err);
    } else {
      res.json({ message: "deleted" });
    }
  })
})


module.exports = router;
