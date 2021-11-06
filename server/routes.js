const controller = require('./controllers');
const router = require('express').Router();

router.get('/pokemon', controller.pokemon.get);

module.exports = router;