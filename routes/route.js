//routes is to be used to handle http requests
const router = require('express').Router();
const {getform} = require('../controller/appController.js');
router.post('/getForm', getform);
module.exports = router;