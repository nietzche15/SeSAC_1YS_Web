var express = require('express');
var controller = require('../controller/CStudent');
const router = express.Router(); 

router.get('/', controller.studentInfo);