/**
 * Match Controller
 * Handles HTTP requests for Match endpoints
 */

const matchService = require("../services/matchService");

// Returns array of all injuries
exports.getAllMatches = async (req, res) => {
    try {
        const matches = await matchService.getAll();
        res.json(matches);
    } catch (err) {
        res.status(500).json({message: "Failed to fetch matches", error: err.message });
    }
};

// Returns single match by ID
exports.getMatchById = async (req, res) => {
    try {
        const match = await matchService.getById(req.params.id);
        if (!match) return res.status(404).json({ message: "Match not found" });
        res.json(match);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch match", error: err.message });
    }
};

// Gets live matches
exports.getLiveMatches = async (req, res) => {
    try {
        const matches = await matchService.getLiveMatches();
        res.json(matches);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch live matches", error: err.message });
    }
};

// Gets scheduled matches
exports.getScheduledMatches = async (req, res) => {
    try {
        const matches = await matchService.getScheduledMatches();
        res.json(matches);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch scheduled matches", error: err.message });
    }
};

// Creates a new match record
exports.createMatch = async (req, res) => {
    try {
        const {team1_id, team2_id, match_date, match_time} = req.body;
        if (!team1_id || !team2_id) {
            return res.status(400).json({ message: "team1_id and team2_id are required" });
        }
        const newMatch = await matchService.create({team1_id, team2_id, match_date, match_time});
        res.status(201).json(newMatch);
    } catch (err) {
        res.status(500).json({ message: "Failed to create match", error: err.message });
    }
};

// Updates an existing match record
exports.updateMatch = async (req, res) => {
    try {
        const updatedMatch = await matchService.update(req.params.id, req.body);
        if (!updatedMatch) return res.status(404).json({ message: "Match not found" });
        res.json(updatedMatch);
    } catch (err) {
        res.status(500).json({ message: "Failed to update match", error: err.message });
    }
};

// Deletes an match record
exports.deleteMatch = async (req, res) => {
    try {
        const deletedMatch = await matchService.remove(req.params.id);
        if (!deletedMatch) return res.status(404).json({ message: "Match not found" });
        res.json({ message: "Match deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete match", error: err.message });
    }
};