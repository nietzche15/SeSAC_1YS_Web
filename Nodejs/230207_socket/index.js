const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const nickName = ['만두', '짬뽕', '짜장'];
let nickNameList = { 만두: '', 짬뽕: '', 짜장: '' };

// 클라이언트 소켓이 연결이 되면 콜백 함수가 실행된다.
// socket : 클라이언트 소켓과 연결 되고 새로 생성된 소켓
io.on('connection', (socket) => {
  let myNickName = nickName[~~(Math.random() * 2.99)];
  nickNameList[myNickName] = socket.id;
  console.log(nickNameList);

  io.emit('nickNameList', nickNameList);

  console.log('Server Socket Connected', socket.id);
  io.emit('notice', {
    nickName: myNickName,
    msg: `${myNickName}님이 입장하셨습니다.`,
  });

  socket.emit('welcome', { msg: 'Server Socket welcome' });

  io.to(`${socket.id}`).emit('directMsg', `Hello, ${myNickName}`);

  socket.on('sendChat', (data) => {
    io.emit('getChat', { msg: myNickName + ` : ${data.msg}` });
  });

  // socket.on('sendChat', (data) => {
  //   data ? socket.on('reponse', )
  // });
  // socket.on('response', (str) => {
  //   console.log(str);
  // });

  // let txt = {
  //   hello: '안녕하세요!',
  //   study: '공부합시다!',
  //   bye: '안녕히가세요!',
  // };

  // socket.on('Ex1', (data) => {
  //   console.log(data.msg);
  //   data = data.msg.slice(7);
  //   socket.emit('response', data + ' : ' + txt[data]);
  // });

  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
  });
});

http.listen(8000, () => {
  console.log('Server port : ', 8000);
});
