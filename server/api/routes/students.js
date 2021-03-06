'use strict';
const router = require('express').Router();
const Students = require('../../db/models/').Students;
const Campus = require('../../db/models/Campus');

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

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Students.findById(id, {
        include: [{
            all: true
        }]
    })
        .then(data => res.json(data))
        .catch(next);
});

router.get('/campi/:id', (req, res, next) => { //finds all students for that campus with id of ..
    const id = req.params.id;
    Campus.findById(id)
        .then(data => res.json(data))
        .catch(next);
});
router.post('/addstudent', (req, res, next) => {
    Students.create(req.body)
        .then(data => {
            console.log(data);
            res.json(data)
        })
        .catch(next);
});

router.delete('/deletestudent/:id', (req, res, next) => {
    Students.destroy({
        where: {
            id: req.params.id
        }
    }).then(numAffectedRows => {
        res.json(numAffectedRows);
    }).catch(next);

})

router.put('/updatestudent/:id', (req, res, next) => {
    Students.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true
    })
        .then(arr => {
            res.json({
                message: 'Updated successfully',
                article: arr[1][0]
            });
        })
        .catch(next);
})
