const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../src/App/js');
});

let nickNameList = {};
let cnt = 0;

io.on('connection', (socket) => {
  // 닉네임 익명N으로 설정, 익명N-socketID key-value로 저장
  cnt++;
  let myNickName = '익명' + cnt;
  nickNameList[socket.id] = myNickName;

  // welcome User
  console.log('Server Socket Connected', socket.id);
  socket.emit('welcome', { msg: 'Server Socket welcome' });
  io.to(`${socket.id}`).emit('getDM', { msg: `Hello, ${myNickName}` });

  io.emit('nickNameList', nickNameList);

  // Realtime User Notice
  io.emit('notice', {
    nickNameList: nickNameList,
    msg: `${myNickName}님이 입장하셨습니다.`,
  });
  // User 입장 시 개인 welcome msg
  io.to(`${socket.id}`).emit('getDM', {
    msg: `Hello, ${myNickName}`,
  });

  // User의 chat 수신 - 전체 전송
  socket.on('sendChat', (data) => {
    io.emit('getChat', {
      user_id: data.user_id,
      msg: `${nickNameList[data.user_id]} : ${data.msg}`,
    });
  });

  // DM 수신 후 전송 (보낸 user, 받는 user both)
  socket.on('sendDM', (data) => {
    console.log(data);
    console.log(nickNameList[data.from_id]);

    io.to(`${data.to_id}`).to(`${data.from_id}`).emit('getDM', {
      from_id: data.from_id,
      to_id: data.to_id,
      msg: data.msg,
    });
  });

  socket.on('disconnect', () => {
    console.log('Server Socket disconnected');
    delete nickNameList[socket.id];
  });
});

http.listen(8000, () => {
  console.log('Server port : ', 8000);
});
