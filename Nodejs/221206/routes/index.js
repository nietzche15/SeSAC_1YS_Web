var express = require('express');
var controller = require('../controller/C');
const router = express.Router(); 

router.get('/', controller);