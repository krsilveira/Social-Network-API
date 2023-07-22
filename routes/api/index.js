//GLOBAL VARIABLES

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


//module exports
module.exports = router;

