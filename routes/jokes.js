const express = require('express');
const router = express.Router();

const jokesModel = require("../models/jokesModel");

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send("Yo geda ta vako hoina?");
});

router.get('/enter', (req, res, next) => {
    res.render('formJoke');
});

router.post('/', (req, res, next) => {
    const jokeEnter = req.body.joke;
    jokesModel.create({ joke: jokeEnter })
        .then((joke) => {
            res.render('formJoke', { joke: joke });
        });
});

router.put('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;
