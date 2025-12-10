/**
 * Injury Service
 * Handles database operations for injuries
 */

const Injury = require("../models/injury");

// Returns array of all injuries
exports.getAll = async() => {
    return await Injury.findAll();
};

// Returns single injury by ID
exports.getById = async(id) => {
    return await Injury.findByPk(id);
};

// Returns array of injuries for a specific team
exports.getByTeam = async(team_id) => {
    return await Injury.findAll({
        include: [{
            association: 'player',
            where: {team_id}
        }]
    });
};

// Creates a new injury record
exports.create = async(data) => {
    return await Injury.create(data);
};

// Updates an existing injury record
exports.update = async(id, data) => {
    const injury = await Injury.findByPk(id);
    if(!injury) return null;
    return await injury.update(data);
};

// Deletes an injury record
exports.remove = async(id) => {
    const injury = await Injury.findByPk(id);
    if(!injury) return null;
    await injury.destroy();
    return injury;
};