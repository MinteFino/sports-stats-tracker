/**
 * Player Service
 * Handles all database operations for players
 * Performs CRUD operations
 */

const Player = require("../models/player");

// Get all players, retrieves a list of all players from database
exports.getAll = async () => {
    return await Player.findAll();
};

// Get player by ID, retrieves a single player by primary key
exports.getById = async (id) => {
    return await Player.findByPk(id);
};

// Create new player, adds new player record to database
exports.create = async(data) => {
    return await Player.create(data);
};

// Update player, modifies existing player record
exports.update = async(id, data) => {
    const player = await Player.findByPk(id);
    if (!player) return null;
    return await player.update(data);
};

// Delete player, removes player record from database
exports.remove = async(id) => {
    const player = await Player.findByPk(id);
    if (!player) return null;
    await player.destroy();
    return true;
};