/**
 * Team Controller
 * Handles HTTP requests for team endpoints
 * Manages request validation and error handling
 * Delegates database operations to teamService
 */

const teamService = require("../services/teamService");

// Retrieves all teams handler from database
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await teamService.getAll();
        if (!teams) {
            return res.status(404).json({error: "No teams found"});
        }
        res.json(teams);
    } catch (error) {
        res.status(500).json({error: "Failed to retrieve teams", error: error.message});
    }
};

//Get team by ID handler from database
exports.getTeamById = async (req, res) => {
    try {
        const team = await teamService.getById(req.params.id);
        if (!team) {
            return res.status(404).json({error: "Team not found"});
        }
        res.json(team);
    } catch (error) {
        res.status(500).json({error: "Failed to retrieve team", error: error.message});
    }
};

// Create new team handler in database
exports.createTeam = async (req, res) => {
    try {
        const { name, league_id } = req.body;
        if (!name) {
            return res.status(400).json({message: "name is required"});
        }

        const newTeam = await teamService.create({name, league_id});
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(500).json({message: "Failed to create team", error: err.message});
    }
};

// Update existing team handler in database
exports.updateTeam = async (req, res) => {
    try {
        const updated = await teamService.update(req.params.id, req.body);
        if (!updated) return res.status(404).json({message: "Team not found"});
        res.json(updated);
    } catch (err) {
        res.status(500).json({message: "Failed to update team", error: err.message});
    }
};

// Delete team handler from database
exports.deleteTeam = async (req, res) => {
    try {
        const removed = await teamService.remove(req.params.id);
        if (!removed) return res.status(404).json({message: "Team not found"});
        res.status(204).send();
    } catch (err) {
        res.status(500).json({message: "Failed to delete team", error: err.message});
    }
};