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


//CAN ALSO BE USED TO GET SINGLE STUDENT
// router.param('id', function(req,res,next,id){
//     console.log('working?')
//   Students.findById(id)
//   .then(student=> {
//       if(!student){
//       const err = Error('Student not found');
//       err.status = 404;
//       throw err;
//     }
//     req.student = student;
//     next();
//   })
//   .catch(next);
// })

// router.get('/:id', function (req, res){
//     res.json(req.student)
// })

