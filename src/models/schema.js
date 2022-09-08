const mongoose = require('mongoose');

const SchemaFormembers = mongoose.Schema;
const Schema1 = new SchemaFormembers({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Model2 = mongoose.model('Member', Schema1);
module.exports = Model2;
