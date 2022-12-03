var express = require('express');
var controller = require('../controller/Cuser');
const router = express.Router(); 

router.get('/', controller.sign );
router.post('/', controller.idCheck );

router.post('/signUp', controller.signUp );
router.post('/signIn', controller.signIn );

router.delete('/deleteInfo', controller.deleteInfo );

module.exports = router;   
