'use strict';
const router = require('express').Router();
const Students = require('../../db/models/').Students;

module.exports = router;
router.get('/', (req, res, next) => {
    Students
        .findAll({
            include: [{
                all: true
            }]
        })
        .then(data => res.json(data))
        .catch(next);
});