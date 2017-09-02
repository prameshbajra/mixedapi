const express = require('express');
const router = express.Router();

const quotesModel = require("../models/quoteModel");

router.get('/enter', (req, res, next) => {
    res.render('formQuote');
});

router.get('/', (req, res, next) => {
    quotesModel.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
        quotesModel.findOne().skip(random).exec((err, result) => {
            res.send({ quote: result });
        });
    });
});

router.post('/', (req, res, next) => {
    const quoteEnter = req.body.joke;
    quotesModel.create({ quote: quoteEnter })
        .then((quote) => {
            res.render('formQuote', { quote: quote });
        });
});

router.put('/:id', (req, res, next) => {
    const newQuote = req.body;
    const id = req.params.id;
    quotesModel.findByIdAndUpdate({ _id: id }, newQuote)
        .then(() => {
            quotesModel.findOne({ _id: id })
                .then((updatedQuote) => {
                    res.send(updatedQuote);
                });
        });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    quotesModel.findByIdAndRemove({ _id: id })
        .then((quoteDeleted) => {
            res.send(quoteDeleted);
        });
});

module.exports = router;
