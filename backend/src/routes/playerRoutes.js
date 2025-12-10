/**
 * Player Routes
 * Defines HTTP endpoints for player operations
 * Maps HTTP requests to controller handlers
 * Write operations require authentication
 */

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Returns array of player objects
router.get('/', playerController.getAllPlayers);
// Returns single player object
router.get('/:id', playerController.getPlayerById);

// Protected write routes
// Returns created player object
router.post('/', playerController.createPlayer);
// Returnes updated player object
router.put('/:id', playerController.updatePlayer);
// Returns success message upon deletion
router.delete('/:id', playerController.deletePlayer);

module.exports = router;