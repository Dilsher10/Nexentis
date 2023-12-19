const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  file: {
    data: Buffer,
    contentType: String
  },
}, {
  timestamps: true,
});

const userModel = mongoose.model("nexentis", userSchema);

module.exports = userModel;
