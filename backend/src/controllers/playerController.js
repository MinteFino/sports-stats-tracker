/**
 * Player Controller
 * Handles HTTP requests for player endpoints
 * Manages request validation and error handling
 * Delegates database operations to playerService
 */

const playerService = require("../services/playerService");

// Get all player handlers from database
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await playerService.getAll();
        res.json(players);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch players", error: err.message});
    }
};

// Get single player from database by ID
exports.getPlayerById = async (req, res) => {
    try {
        const player = await playerService.getById(req.params.id);
        if (!player) {
            return res.status(404).json({message: "Player not found"});
        }
        res.json(player);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch player", error: err.message});
    }
};

// Create a new player record in the database
exports.createPlayer = async (req, res) => {
    try {
        const { first_name, last_name, position, team_id } = req.body;
        if (!first_name || !last_name) {
            return res.status(400).json({message: "first_name and last_name are required"});
        }

        const newPlayer = await playerService.create({first_name, last_name, position, team_id});
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({message: "Failed to create player", error: err.message});
    }
};

// Update existing player record in the database
exports.updatePlayer = async (req, res) => {
    try {
        const updated = await playerService.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({message: "Player not found"});
        res.json(updated);
    } catch (err) {
        res.status(500).json({message: "Failed to update player", error: err.message});
    }
};

// Delete player record from the database
exports.deletePlayer = async (req, res) => {
    try {
        const removed = await playerService.remove(req.params.id);
        if (!removed) return res.status(404).json({message: "Player not found"});
        res.status(204).send();
    } catch (err) {
        res.status(500).json({message: "Failed to delete player", error: err.message});
    }
};