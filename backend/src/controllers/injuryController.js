/**
 * Injury Controller
 * Handles HTTP requests for injury endpoints
 */

const injuryService = require("../services/injuryService");

// Returns array of all injuries
exports.getAllInjuries = async (req, res) => {
    try {
        const injuries = await injuryService.getAll();
        res.json(injuries);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch injuries", error: err.message });
    }
};

// Returns single injury by ID
exports.getInjuryById = async (req, res) => {
    try {
        const injury = await injuryService.getById(req.params.id);
        if (!injury) return res.status(404).json({ message: "Injury not found" });
        res.json(injury);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch injury", error: err.message });
    }
};

// Gets injuries for a specific team
exports.getInjuriesByTeam = async (req, res) => {
    try {
        const injuries = await injuryService.getByTeam(req.params.team_id);
        res.json(injuries);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch injuries for team", error: err.message });
    }
};

// Creates a new injury record
exports.createInjury = async (req, res) => {
    try {
        const {player_id, injury_type, description, return_date} = req.body;
        if (!player_id || !injury_type) {
            return res.status(400).json({ message: "player_id and injury_type are required" });
        }
        const newInjury = await injuryService.create({player_id, injury_type, description, return_date});
        res.status(201).json(newInjury);
    } catch (err) {
        res.status(500).json({ message: "Failed to create injury", error: err.message });
    }
};

// Updates an existing injury record
exports.updateInjury = async (req, res) => {
    try {
        const updatedInjury = await injuryService.update(req.params.id, req.body);
        if (!updatedInjury) return res.status(404).json({ message: "Injury not found" });
        res.json(updatedInjury);
    } catch (err) {
        res.status(500).json({ message: "Failed to update injury", error: err.message });
    }
};

// Deletes an injury record
exports.deleteInjury = async (req, res) => {
    try {
        const deletedInjury = await injuryService.remove(req.params.id);
        if (!deletedInjury) return res.status(404).json({ message: "Injury not found" });
        res.json({ message: "Injury deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete injury", error: err.message });
    }
};