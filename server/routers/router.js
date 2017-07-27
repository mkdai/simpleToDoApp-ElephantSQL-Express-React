const router = require('express').Router();

router.use('/list', require('./listRouter'));
router.use('/entry', require('./entryRouter'));

module.exports = router;