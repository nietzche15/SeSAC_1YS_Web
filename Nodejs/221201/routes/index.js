var express = require('express');
var controller = require('../controller/Cmain');
const router = express.Router(); //router 만드는express method

router.get( '/', controller.main); // 연결할 router 정의 지정
router.get( '/test', controller.test);
router.post( '/postForm', controller.post);

//Cmain.js에 저장된 controller 함수만 사용가능

module.exports = router; //다른 곳에서 이 index.js 파일 참조할 때 router를 내보냄


