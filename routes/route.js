//routes is to be used to handle http requests
const router = require('express').Router();
const {mymailer} = require('../controller/appController.js');
router.get('/mail/myMailer', mymailer)
module.exports = router;