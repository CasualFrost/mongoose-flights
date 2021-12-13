var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
const flightsCtrl = require('../controllers/flights');

// All paths in this router have "/flights" prefixed to them

// GET "/flights/new" - New Route
router.get('/new', flightsCtrl.new);

// POST "/flights" - Create Route
router.post('/', flightsCtrl.create);

// GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

// GET "/flights/:id" - Show Route
router.get('/:id', flightsCtrl.show);

module.exports = router;