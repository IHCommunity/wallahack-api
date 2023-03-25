const router = require('express').Router();
const usersController = require('../controllers/users.controller');

/* Users */

router.post('/users', usersController.create);
router.get('/users', usersController.list);
router.get('/users/:id', usersController.getUser);

module.exports = router;