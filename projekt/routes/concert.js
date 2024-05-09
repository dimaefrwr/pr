const express = require('express');
const router = express.Router(); 
const ensureAuthenticated = require('../middleware/authMiddleware');
const concertController = require('../controllers/concertController');

router.get('/', ensureAuthenticated, concertController.getEvents);
router.post('/reserve/:id', ensureAuthenticated, concertController.reserveSeat);

module.exports = router;
