//routes is to be used to handle http requests
const router = require('express').Router();
const {callall} = require('../controller/appController.js');
router.post('/callAll', callall);
module.exports = router;