const router = require('express').Router();
const controller = require('../controller/EntryController');

router.get('/fetchEntry', controller.fetchEntry);
router.post('/createEntry', controller.createEntry);
router.put('/toggleEntryFinished', controller.toggleEntryFinished );

module.exports = router;