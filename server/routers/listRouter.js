const router = require('express').Router();
const controller = require('../controller/listController');

router.get('/fetchList', controller.fetchList);
router.post('/createList', controller.createList);

module.exports = router;