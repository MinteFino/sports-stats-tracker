/**
 * Team Model
 * Defines the structure of the Team table in the database
 * Stores team information and league associations
 * ***This will be changed when we know more about Database structure
 */


const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Define Team model with team information fields
const Team = sequelize.define(
  "Team",
  {
    // team_id: auto-incremented primary keys
    team_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    league_id: DataTypes.INTEGER
  },
  // Uses table name "Team" to map to database
  { tableName: "Team", timestamps: false }
);

// Export team model for use throughout the app
module.exports = Team;
