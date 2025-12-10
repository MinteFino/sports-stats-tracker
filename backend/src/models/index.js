/**
 * Model Associations
 * Defines relationships between database models
 * This file must be required early in the app so associations are set up before queries
 */


const sequelize = require("../config/db");
const Player = require("./player");
const Team = require("./team");
const Injury = require("./injury");
const Match = require("./match");

// Define associations
Team.hasMany(Player, {foreignKey: "team_id", sourceKey: "team_id"});
Player.belongsTo(Team, {foreignKey: "team_id", targetKey: "team_id"});
// Injuries linked to players
Player.hasMany(Injury, {foreignKey: "player_id", sourceKey: "player_id"});
Injury.belongsTo(Player, {foreignKey: "player_id", targetKey: "player_id"});
// Matches linked to hometeam
Team.hasMany(Match, {foreignKey: "team1_id", as: "homeMatches"});
Match.belongsTo(Team, {foreignKey: "team1_id", as: "homeTeam"});
// Matches linked to awayteam
Team.hasMany(Match, {foreignKey: "team2_id", as: "awayMatches"});
Match.belongsTo(Team, {foreignKey: "team2_id", as: "awayTeam"});

// Export sequelize instance and models for use in server initialization 
module.exports = {
    sequelize, 
    Player,
    Team,
    Injury,
    Match
};