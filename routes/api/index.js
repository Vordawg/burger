const router = require('express').Router();
router.use('/burgers', require('./burgers_controller.js'));

module.exports = router;