/**
 * Team Routes
 * Defines HTTP endpoints for team operations
 * Maps HTTP requests to controller handlers
 * Write operations require authentication
 */

const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Returns array of teams
router.get('/', teamController.getAllTeams);
// Returns single team by ID
router.get('/:id', teamController.getTeamById);

// Proteted write routes
// Creates team object with generated ID
router.post('/', teamController.createTeam);
// Updates team by ID
router.put('/:id', teamController.updateTeam);
// Deletes team by ID
router.delete('/:id', teamController.deleteTeam);

module.exports = router;