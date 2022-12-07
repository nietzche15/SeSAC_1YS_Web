var express = require('express');
var controller = require('../controller/Cstudent');
const router = express.Router(); 

router.get('/', controller.studentInfo );
router.post('/', controller.enterInfo );

module.exports = router;