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
let roomToUser = {}; // roomName - [user1, user2, user3, ...]
let userToRoom = {}; // socektid - roomName-N

//Triggered when a client is connected.

io.on('connection', function (socket) {
  console.log('User Connected :' + socket.id);

  //Triggered when a peer hits the join room button.

  socket.on('join', function (roomName) {
    let rooms = io.sockets.adapter.rooms;
    let room = rooms.get(roomName);

    //room == undefined when no such room exists.
    if (room == undefined) {
      userToRoom[socket.id] = roomName + '-C';
      roomToUser[roomName] = [socket.id];
      console.log('created:', userToRoom, roomToUser);
      socket.join(roomName);
      socket.emit('created', {
        roomSize: room?.size,
        userToRoom: userToRoom,
        roomToUser: roomToUser,
      });
    } else if (room.size <= 8) {
      //room.size == 1 when one person is inside the room.
      userToRoom[socket.id] = roomName + '-' + room?.size;
      roomToUser[roomName].push(socket.id);
      console.log('joined:', room?.size, userToRoom, roomToUser);

      socket.join(roomName);
      socket.emit('joined', {
        joinId: socket.id,
        roomSize: room?.size,
        userToRoom: userToRoom,
        roomToUser: roomToUser,
      });
    } else {
      //when there are already eight people inside the room.
      socket.emit('full');
    }
    console.log('rooms: ', rooms);
    io.to(roomName).emit('notice', {
      roomSize: room?.size || 0,
      userToRoom: userToRoom,
      roomToUser: roomToUser,
    });
  });

  // ---[1]
  //Triggered when the person who joined the room is ready to communicate.
  socket.on('ready', function (roomName) {
    socket.broadcast.to(roomName).emit('ready'); //Informs the other peer in the room.
  });

  //Triggered when server gets an icecandidate from a peer in the room.
  // ---[3-0]
  socket.on('candidate', function (candidate, roomName) {
    // console.log('candidate: ', candidate);
    socket.broadcast.to(roomName).emit('candidate', candidate); //Sends Candidate to the other peer in the room.
  });

  //Triggered when server gets an offer from a peer in the room.
  // ---[3]
  socket.on('offer', function (offer, roomName) {
    socket.broadcast.to(roomName).emit('offer', offer); //Sends Offer to the other peer in the room.
  });

  //Triggered when server gets an answer from a peer in the room.
  // ---[5]
  socket.on('answer', function (answer, roomName) {
    socket.broadcast.to(roomName).emit('answer', answer); //Sends Answer to the other peer in the room.
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected :' + socket.id);
    console.log('check:', userToRoom[socket.id]?.slice(0, -2));
    socket.leave(userToRoom[socket.id], socket.id);
    delete userToRoom[socket.id];
  });
});

http.listen(4000, () => {
  console.log('Server port : ', 4000);
});
