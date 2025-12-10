/**
 * Player Model
 * Defines the structure of the Player table in the database
 * Stores information about individual athletes/players
 * ***This will be changed when we know more about Database structure
 */


const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");


// Define Player model with columns for player information
const Player = sequelize.define(
    "Player",
    {
        // player_id: auto-incremented primary key
        player_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        position: DataTypes.STRING,
        team_id: DataTypes.INTEGER
    },
    // Uses table name "Player" to map to database
    {tableName: "Player", timestamps: false}
);

// Export player model for use throughout the app
module.exports = Player