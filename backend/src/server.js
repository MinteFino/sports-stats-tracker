/**
 * Main Server File
 * Entry Point for the backend application
 * Initializes Express app, loads routes, and starts HTTP server
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./config/db");

// load models and associations
require("./models");

// Import route handlers
const playerRoutes = require("./routes/playerRoutes");
const teamRoutes = require("./routes/teamRoutes");
const injuryRoutes = require("./routes/injuryRoutes");
const matchRoutes = require("./routes/matchRoutes");

// Create Express appication instance
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Gets root node
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});


// Player routes
app.use('/api/players', playerRoutes);
// Team routes
app.use('/api/teams', teamRoutes);
// Injury routes
app.use('/api/injuries', injuryRoutes);
// Match routes
app.use('/api/matches', matchRoutes);

// database sync
sequelize
  .sync()
  .then(() => console.log("Database Synced"))
  .catch((err) => console.log(err));

// runs web on port from .env
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
