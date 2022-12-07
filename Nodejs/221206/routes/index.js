var express = require('express');
var controller = require('../controller/Cstudent');
const router = express.Router(); 

router.get('/', controller.studentInfo );

module.exports = router;