const express = require('express');

const router = express.Router();

const Phone = require('../models/phone');

router.get('/phones', (req, res, next) => {
  Phone.find({}, (err, phoneList) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(phoneList);
    }
  });
});

router.post('/phones', (req, res, next) => {
  const newPhone = new Phone({
    brand: req.body.brand,
    model: req.body.model,
    specs: req.body.specs || [],
    image: req.body.image,
  });

  newPhone.save((err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ phone: newPhone });
    }
  });
});

router.get('/phones/:id', (req, res, next) => {
  const { id } = req.params;

  Phone.findById(id, (err, phone) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(phone);
    }
  });
});

router.put('/phones/:id', (req, res, next) => {
  const { id } = req.params;
  const phoneToUpdate = {
    brand: req.body.brand,
    model: req.body.model,
    specs: req.body.specs,
    image: req.body.image || '',
  };

  Phone.findByIdAndUpdate(id, phoneToUpdate, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ message: 'updated' });
    }
  });
});

router.delete('/phones/:id', (req, res, next) => {
  const { id } = req.params;

  Phone.remove({ _id: id }, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json({ message: 'deleted' });
    }
  });
});


module.exports = router;
