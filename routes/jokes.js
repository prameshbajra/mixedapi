const express = require('express');
const router = express.Router();

const jokesModel = require("../models/jokesModel");

/* GET home page. */
router.get('/', (req, res, next) => {

});

router.get('/enter', (req, res, next) => {
    res.render('form');
});

router.post('/', (req, res, next) => {
    const jokeEnter = req.body.joke;
    jokesModel.create({ joke: jokeEnter })
        .then((joke) => {
            res.render('form', { joke: joke });
        });
});

router.put('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});



module.exports = router;
