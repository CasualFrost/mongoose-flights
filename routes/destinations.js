var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;