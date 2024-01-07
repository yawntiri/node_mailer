//routes is to be used to handle http requests
const router = require('express').Router();
const {mymailer,getapp, getform} = require('../controller/appController.js');
router.get('/myMailer', mymailer);
router.post('/getForm',getform);
router.post('/getApp', getapp)
module.exports = router;