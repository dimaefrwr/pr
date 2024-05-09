// database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/local', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB підключено.');
  } catch (error) {
    console.error('Помилка підключення до MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
