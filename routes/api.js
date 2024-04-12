const router = require('express').Router();
const {checkToken} = require("../utils/middlewares")

router.use('/producto',require('./api/productos'))
router.use('/valoracion',require('./api/valoraciones'))

router.use('/users',require('./api/users'))
router.use('/payment',require('./api/payment'))






module.exports=router;