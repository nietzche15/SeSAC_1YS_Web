var express = require('express');
var controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.sessionMain );

router.get('/login', controller.sessionLogin );
router.post('/login', controller.sessionCreate );

router.post('/logout', controller.logOut );

module.exports = router;