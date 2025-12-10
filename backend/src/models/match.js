/**
 * Match Model
 * Stores live match information
 */

const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

// Will change for database structure
const Match = sequelize.define(
    "Match",
    {
        match_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        team1_id: DataTypes.INTEGER,
        team2_id: DataTypes.INTEGER,
        score1: {type: DataTypes.INTEGER, defaultValue: 0},
        score2: {type: DataTypes.INTEGER, defaultValue: 0},
        status: {type: DataTypes.STRING, defaultValue: "scheduled"},  // scheduled, live, finished
        match_date: DataTypes.DATE,
        match_time: DataTypes.STRING
    },
    {tableName: "Match", timestamps: false}
);

module.exports = Match;