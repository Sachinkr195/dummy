const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: String,
  referralCode: String,
  donationsRaised: Number
});

module.exports = mongoose.model('Intern', internSchema);
