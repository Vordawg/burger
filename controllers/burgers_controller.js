const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function (req, res) {
  burger.create(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.redirect('/');
    });
});

router.put('/:id', function (req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      res.redirect('/');
    },
  );
});

router.delete('/:id', function (req, res) {
  const condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.delete(
    condition,
    function (result) {
      res.redirect('/');
    },
  );
});

// Export routes for server.js to use.
module.exports = router;
