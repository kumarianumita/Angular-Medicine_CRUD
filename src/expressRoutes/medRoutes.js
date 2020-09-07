
var express = require('express');
var app = express();
var medRoutes = express.Router();

// Require Item model in our routes module
var Medicine = require('../models/Medicine');

// Defined store route
medRoutes.route('/add').post(function (req, res) {
  var medicine = new Medicine(req.body);
  medicine.save()
    .then(item => {
    res.status(200).json({'medicine': 'Medicines added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
medRoutes.route('/').get(function (req, res) {
    Medicine.find(function (err, medicines){
    if(err){
      console.log(err);
    }
    else {
      res.json(medicines);
    }
  });
});

// Defined edit route
medRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Medicine.findById(id, function (err, medicine){
      res.json(medicine);
  });
});

//  Defined update route
medRoutes.route('/update/:id').post(function (req, res) {
    Medicine.findById(req.params.id, function(err, medicine) {
    if (!medicine)
      return next(new Error('Could not load Document'));
    else {
        medicine.name = req.body.name;
        medicine.price = req.body.price;

        medicine.save().then(medicine => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
medRoutes.route('/delete/:id').get(function (req, res) {
    Medicine.findByIdAndRemove({_id: req.params.id}, function(err, medicine){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = medRoutes;