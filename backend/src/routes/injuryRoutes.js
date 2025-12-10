/**
 * Injury Routes
 * Defines HTTP endpoints for injury operations
 * Maps HTTP requests to controller handlers
 * Write operations require authentication
 */

const express = require('express');
const router = express.Router();
const injuryController = require('../controllers/injuryController');

// Returns array of player objects
router.get('/', injuryController.getAllInjuries);
// Returns single player object
router.get('/:id', injuryController.getInjuryById);
// Gets injuries for a specific team
router.get('/team/:team_id', injuryController.getInjuriesByTeam);

// Protected write routes
// Returns created player object
router.post('/', injuryController.createInjury);
// Returnes updated player object
router.put('/:id', injuryController.updateInjury);
// Returns success message upon deletion
router.delete('/:id', injuryController.deleteInjury);

module.exports = router;