'use strict';
const router = require('express').Router();
const Campus = require('../../db/models/Campus');
const Students = require('../../db/models/Students');

module.exports = router;
router.get('/', (req, res, next) => {
    Campus
        .findAll({
            include: [{
                all: true
            }]
        })
        .then(data => res.json(data))
        .catch(next);
});


router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Campus.findById(id, {
        include: [{
            all: true
        }]
    }).then(data => res.json(data))
        .catch(next);
});
