var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Medicine = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'medicines'
});

module.exports = mongoose.model('Medicine', Medicine);