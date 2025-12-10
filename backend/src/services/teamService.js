/**
 * Team Service
 * Handles all database operations for teams
 * Performs CRUD operations
 */

const Team = require("../models/team");

// Get all teams, retrieves list of all teams from database
exports.getAll = async () => {
    return await Team.findAll();
};

// Get team by ID, retrieves single team by primary key
exports.getById = async (id) => {
    return await Team.findByPk(id);
};

// Create new team, adds a new team record to the database
exports.create = async (data) => {
    return await Team.create(data);
};

// Update existing team, modifies team record
exports.update = async (id, data) => {
    const team = await Team.findByPk(id);
    if (!team) return null;
    return await team.update(data);
};

// Delete team, removes team record from database
exports.delete = async (id) => {
    const team = await Team.findByPk(id);
    if(!team) return null;
    await team.destroy();
    return true;
}