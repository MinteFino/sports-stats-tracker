/**
 * Match Routes
 * Defines HTTP endpoints for injury operations
 * Maps HTTP requests to controller handlers
 * Write operations require authentication
 */

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Returns array of matches
router.get('/', matchController.getAllMatches);
// Returns live matches
router.get('/live', matchController.getLiveMatches);
// Gets matches scheduled
router.get('/scheduled', matchController.getScheduledMatches);
// Returns single match object
router.get('/:id', matchController.getMatchById);

// Protected write routes
// Returns created player object
router.post('/', matchController.createMatch);
// Returnes updated player object
router.put('/:id', matchController.updateMatch);
// Returns success message upon deletion
router.delete('/:id', matchController.deleteMatch);

module.exports = router;