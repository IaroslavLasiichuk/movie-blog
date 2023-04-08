// Require express user and blog routes.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// Default router for all routes.
router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;