var express = require('express');
var controller = require('../controller/Cfoods');
const router = express.Router();  

router.get('/', controller.foodlist );
router.post('/register', controller.addFood );


module.exports = router;   