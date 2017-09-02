const express = require('express');
const router = express.Router();

const jokesModel = require("../models/jokesModel");

router.get('/enter', (req, res, next) => {
    res.render('formJoke');
});

router.get('/', (req, res, next) => {
    jokesModel.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
        jokesModel.findOne().skip(random).exec((err, result) => {
            res.send({ joke: result });
        });
    });
});

router.post('/', (req, res, next) => {
    const jokeEnter = req.body.joke;
    jokesModel.create({ joke: jokeEnter })
        .then((joke) => {
            res.render('formJoke', { joke: joke });
        });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const newJoke = req.body;
    jokesModel.findByIdAndUpdate({ _id: id }, newJoke)
        .then(() => {
            jokesModel.findOne({ _id: id })
                .then((updatedJoke) => {
                    res.send(updatedJoke);
                });
        });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    jokesModel.findByIdAndRemove({ _id: id })
        .then((joke) => {
            res.send(joke);
        });
});

module.exports = router;
