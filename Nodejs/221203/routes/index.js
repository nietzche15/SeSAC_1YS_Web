var express = require('express');
var controller = require('../controller/Cuser');
const router = express.Router(); 

router.get('/', controller.sign );
router.post('/', controller.signIn );

router.post('/signUp', controller.idCheck );
router.post('/signUp', controller.signUp );

router.get('/deleteInfo', controller.checkInfo );
router.delete('/deleteInfo', controller.deleteInfo );
router.patch('/updateInfo', controller.updateInfo );

module.exports = router;   
