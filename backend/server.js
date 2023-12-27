const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const CLUSTER = process.env.MONGODB_CLUSTER;

async function connectionToDatabase() {
  try {
    await mongoose.connect(CLUSTER);
    console.log('connected to db');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectionToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
