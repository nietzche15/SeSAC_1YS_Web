const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

//Starts the server

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '../src/App.js');
});

//Upgrades the server to accept websockets.
let roomList = {}; // roomName - roomUser
let roomUser = {}; // socektid - roomName

//Triggered when a client is connected.

io.on('connection', function (socket) {
  console.log('User Connected :' + socket.id);

  //Triggered when a peer hits the join room button.

  socket.on('join', function (roomName) {
    let rooms = io.sockets.adapter.rooms;
    let room = rooms.get(roomName);

    //room == undefined when no such room exists.
    if (room == undefined) {
      roomUser[socket.id] = roomName + '-C';
      roomList[roomName] = [socket.id];
      console.log('create:', roomUser, roomList);
      socket.join(roomName);
      socket.emit('created');
    } else if (room.size <= 8) {
      //room.size == 1 when one person is inside the room.
      roomUser[socket.id] = roomName + '-' + room?.size;
      roomList[roomName].push(socket.id);
      console.log('join:', room?.size, roomUser, roomList);

      socket.join(roomName);
      socket.emit('joined', {
        joinId: roomUser[socket.id],
      });
    } else {
      //when there are already eight people inside the room.
      socket.emit('full');
    }
    console.log('rooms: ', rooms);
    io.to(roomName).emit('notice', {
      roomSize: room?.size || 0,
      roomUser: roomUser || false,
      roomList: roomList || false,
    });
  });

  //Triggered when the person who joined the room is ready to communicate.
  socket.on('ready', function (roomName) {
    socket.broadcast.to(roomName).emit('ready'); //Informs the other peer in the room.
  });

  //Triggered when server gets an icecandidate from a peer in the room.

  socket.on('candidate', function (candidate, roomName) {
    // console.log('candidate: ', candidate);
    socket.broadcast.to(roomName).emit('candidate', candidate); //Sends Candidate to the other peer in the room.
  });

  //Triggered when server gets an offer from a peer in the room.

  socket.on('offer', function (offer, roomName) {
    socket.broadcast.to(roomName).emit('offer', offer); //Sends Offer to the other peer in the room.
  });

  //Triggered when server gets an answer from a peer in the room.

  socket.on('answer', function (answer, roomName) {
    socket.broadcast.to(roomName).emit('answer', answer); //Sends Answer to the other peer in the room.
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected :' + socket.id);
    console.log('check:', roomUser[socket.id]?.slice(0, -2));
    socket.leave(socket.id);
    delete roomUser[socket.id];
  });
});

http.listen(4000, () => {
  console.log('Server port : ', 4000);
});
