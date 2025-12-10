/**
 * Match Service
 * Handles database operations for matches
 */

const Match = require("../models/match");

// Returns array of all matches
exports.getAll = async() => {
    return await Match.findAll();
};

// Returns single match by ID
exports.getById = async(id) => {
    return await Match.findByPk(id);
};

// Get live matches
exports.getLiveMatches = async() => {
    return await Match.findAll({
        where: { status: 'live' }
    });
};

// Get scheduled matches
exports.getScheduledMatches = async() => {
    return await Match.findAll({
        where: { status: 'scheduled' }
    });
};

// Creates a new match record
exports.create = async(data) => {
    return await Match.create(data);
};

// Updates an existing match record
exports.update = async(id, data) => {
    const match = await Match.findByPk(id);
    if(!match) return null;
    return await match.update(data);
};

// Deletes an match record
exports.remove = async(id) => {
    const match = await Match.findByPk(id);
    if(!match) return null;
    await match.destroy();
    return match;
};