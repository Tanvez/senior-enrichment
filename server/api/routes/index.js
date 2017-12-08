'use stict'

const router = require('express').Router();

module.exports = router;

router.use('/students', require('./students'));
router.use('/campus', require('./campus'));

router.use(function (req, res) {
    res.status(404).end();
});