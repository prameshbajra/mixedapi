const express = require('express');
const router = express.Router();

const quotesModel = require("../models/quoteModel");

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send("Yo geda ta vako hoina?");
});

router.get('/enter', (req, res, next) => {
    res.render('formQuote');
});

router.post('/', (req, res, next) => {
    const quoteEnter = req.body.joke;
    quotesModel.create({ quote: quoteEnter })
        .then((quote) => {
            res.render('formQuote', { quote: quote });
        });
});

router.put('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

module.exports = router;
