const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Intern = require('./models/intern');

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Intern.insertMany([
      { name: 'Sachin', referralCode: 'sachin2025', donationsRaised: 2400 },
      { name: 'Aryan', referralCode: 'aryan2025', donationsRaised: 3100 },
      { name: 'Megha', referralCode: 'megha2025', donationsRaised: 2800 },
    ]);
    console.log('✅ Data inserted');
  } catch (err) {
    console.error('❌ Error inserting data:', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
