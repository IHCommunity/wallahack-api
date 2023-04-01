const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');
const productsController = require('../controllers/products.controller');
const upload = require('../config/storage.config');

const authMiddleware = require('../middlewares/auth.middleware');

/* Auth */

router.post('/login', authController.login);

/* Users */

router.post('/users', usersController.create);
router.get('/users', usersController.list);
router.get('/users/me', authMiddleware.isAuthenticated, usersController.getCurrentUser);
router.get('/users/:id', usersController.getUser);

/* Products */

router.post('/products', authMiddleware.isAuthenticated, upload.single('photo'), productsController.create);
router.get('/products', productsController.list);
router.patch('/products/:id', authMiddleware.isAuthenticated, productsController.buy)
router.get('/products/:id', productsController.detail)

module.exports = router;