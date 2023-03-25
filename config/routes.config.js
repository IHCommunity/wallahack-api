const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');

/* Auth */

router.post('/login', authController.login);

/* Users */

router.post('/users', usersController.create);
router.get('/users', usersController.list);
router.get('/users/:id', usersController.getUser);

module.exports = router;