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
            }] // eager loading -> creates another key with `students` that has all students to that campus
        })
        .then(data => res.json(data))
        .catch(next);
});

router.get('/:id', (req, res, next) => { //finds all students for that campus with id of ..
    const id = req.params.id;
    Students.findAll({
        where: {
            campusId: id
        }
    }).then(data => res.json(data))
        .catch(next);
});

router.post('/addcampus', (req, res, next) => {
    Campus.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(next);
})


// router.get('/:id', (req, res, next) => {
//     const id = req.params.id;
//     Campus.findById(id, {
//         include: [{
//             all: true
//         }]
//     }).then(data => res.json(data))
//         .catch(next);
// });
