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

let nickNameList = { admin: 'Server' };

// const username = prompt('닉네임을 입력해주세요.(5자 이하 권장)');

io.on('connection', (socket) => {
  // 닉네임 익명N으로 설정, 익명N-socketID key-value로 저장
  let myNickName = '익명' + Object.keys(nickNameList).length;
  nickNameList[socket.id] = myNickName;

  // welcome User
  console.log('Server Socket Connected', socket.id);
  socket.emit('welcome', { msg: 'Server Socket welcome' });

  // Realtime User Notice
  io.emit('notice', {
    nickNameList: nickNameList,
    msg: `${myNickName}님이 입장하셨습니다.`,
  });
  // User 입장 시 개인 welcome msg
  io.to(`${socket.id}`).emit('getDM', {
    from_id: 'admin',
    to_id: socket.id,
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
    io.to(`${data.to_id}`).to(`${data.from_id}`).emit('getDM', {
      from_id: data.from_id,
      to_id: data.to_id,
      msg: data.msg,
    });
  });

  socket.on('disconnect', () => {
    console.log('Server  Socket disconnected');
    io.emit('notice', {
      msg: `${nickNameList[socket.id]}님이 퇴장하셨습니다.`,
    });
    // delete nickNameList[socket.id];
  });
});

http.listen(8000, () => {
  console.log('Server port : ', 8000);
});
