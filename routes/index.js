const router = require('express').Router();
router.use('/api', require('./api'));
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;