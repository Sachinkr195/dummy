const express = require('express');
const router = express.Router();
const Intern = require('../models/intern');

router.get('/user/:referralCode', async (req, res) => {
  const intern = await Intern.findOne({ referralCode: req.params.referralCode });
  if (!intern) return res.status(404).json({ message: 'Intern not found' });
  res.json(intern);
});


router.get('/leaderboard', async (req, res) => {
  const topInterns = await Intern.find().sort({ donationsRaised: -1 });
  res.json(topInterns);
});

module.exports = router;
