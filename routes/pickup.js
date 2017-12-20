const express = require('express');
const router = express.Router();

const pickupModel = require("../models/pickUpModel");

router.get('/enter', (req, res, next) => {
    res.render('formPickup');
});

router.get('/', (req, res, next) => {
    pickupModel.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
        pickupModel.findOne().skip(random).exec((err, result) => {
            res.json({ pickup: result });
        });
    });
});

router.post('/', (req, res, next) => {
    const pickupEnter = req.body.pickup;
    pickupModel.create({ pickup: pickupEnter })
        .then((pickup) => {
            res.render('formPickup', { pickup: pickup });
        });
});

router.put('/:id', (req, res, next) => {
    const newPickup = req.body;
    const id = req.params.id;
    pickupModel.findByIdAndUpdate({ _id: id }, newPickup)
        .then(() => {
            pickupModel.findOne({ _id: id })
                .then((updatedPickup) => {
                    res.json(updatedPickup);
                });
        });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    pickupModel.findByIdAndRemove({ _id: id })
        .then((pickupDeleted) => {
            res.json(pickupDeleted);
        });
});

module.exports = router;
