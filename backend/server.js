const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bikeRoutes = require('./src/routes/bike.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const CLUSTER = process.env.MONGODB_CLUSTER;
const ADMIN_API_PREFIX = '/api/admin';

app.use(cors());
app.use(express.json());

async function connectionToDatabase() {
  try {
    await mongoose.connect(CLUSTER);
    console.log('connected to db');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectionToDatabase().then(() => {
  app.use(ADMIN_API_PREFIX, bikeRoutes);
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
