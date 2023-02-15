import './App.css';
import { io } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
let socket = io.connect('http://localhost:4000', {
  cors: { origin: '*' },
});
let roomName;
let creator = false;
let rtcPeerConnection;
let userStream;
let userToRoom;
let roomToUser;
let joinId;
let roomSize;
let CONSTRAINTS = {
  audio: true,
  video: { width: 640, height: 360 },
};

let iceServers = {
  iceServers: [
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

function App() {
  const [enterRoom, setEnterRoom] = useState(false);
  const roomInput = useRef();
  const userVideo = useRef();
  const userName = useRef();
  const peerVideo1 = useRef();
  const peerName1 = useRef();
  const peerVideo2 = useRef();
  const peerName2 = useRef();
  const peerVideo3 = useRef();
  const peerName3 = useRef();

  const clickJoinBtn = () => {
    console.log('roomInput.current.value: ', roomInput.current.value);
    /* eslint-disable */
    roomInput.current.value === ''
      ? alert('Please enter a room name')
      : ((roomName = roomInput.current.value), socket.emit('join', roomName));
    setEnterRoom(true);
  };

  useEffect(() => {
    // first user
    socket.on('created', (data) => {
      creator = true;

      const { roomSize, userToRoom, roomToUser } = data;
      console.log('created', roomSize, userToRoom, roomToUser);

      navigator.mediaDevices
        .getUserMedia(CONSTRAINTS)
        .then(function (stream) {
          console.log('stream: ', stream);
          /* use the stream */
          userStream = stream;
          userVideo.current.srcObject = stream;
          userVideo.current.onloadedmetadata = function (e) {
            userVideo.current.play();
          };
        })
        .catch(function (err) {
          /* handle the error */
          alert("Couldn't Access User Media");
        });
      userName.current.innerHTML = `<div>ID : ${userToRoom[socket.id]}</div>`;
    });
    socket.on('notice', (data) => {
      const { roomSize, userToRoom, roomToUser } = data;
      console.log('notice: ', roomSize, userToRoom, roomToUser);
    });

    /// joined user
    socket.on('joined', (data) => {
      creator = false;
      const { joinId, roomSize, userToRoom, roomToUser } = data;
      console.log('joined:', joinId, roomSize, userToRoom, roomToUser);
      console.log('jid : sckid ::: ', joinId, socket.id);

      navigator.mediaDevices
        .getUserMedia(CONSTRAINTS)
        .then(function (stream) {
          /* use the stream */
          userStream = stream;
          userVideo.current.srcObject = stream;
          userVideo.current.onloadedmetadata = function (e) {
            userVideo.current.play();
          };
          userName.current.innerHTML = `<div>ID2 : ${userToRoom[joinId]}</div>`;
          socket.emit('ready', roomName);
        })
        .catch(function (err) {
          /* handle the error */
          alert("Couldn't Access User Media");
        });
    });
    socket.on('notice', (data) => {
      roomSize = data.roomSize;
      userToRoom = data.userToRoom;
      roomToUser = data.roomToUser;
      console.log('notice: ', roomSize, userToRoom, roomToUser);
    });

    socket.on('full', function () {
      alert("Room is Full, Can't Join");
    });

    // ---[2]
    socket.on('ready', function () {
      if (creator) {
        rtcPeerConnection = new RTCPeerConnection(iceServers);
        rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
        rtcPeerConnection.ontrack = OnTrackFunction;
        rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream);
        rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream);
        rtcPeerConnection
          .createOffer()
          .then((offer) => {
            console.log('app emit offer:', offer);
            rtcPeerConnection.setLocalDescription(offer);
            socket.emit('offer', offer, roomName);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log('ready rtcPeerConnection: ', rtcPeerConnection);
      }
    });
    // ---[2-1]
    socket.on('candidate', function (candidate) {
      console.log('app candidate: ', candidate);
      let icecandidate = new RTCIceCandidate(candidate);
      rtcPeerConnection.addIceCandidate(icecandidate);
    });
    // ---[4]
    socket.on('offer', function (offer) {
      if (!creator) {
        rtcPeerConnection = new RTCPeerConnection(iceServers);
        rtcPeerConnection.onicecandidate = OnIceCandidateFunction;
        rtcPeerConnection.ontrack = OnTrackFunction;
        rtcPeerConnection.addTrack(userStream.getTracks()[0], userStream);
        rtcPeerConnection.addTrack(userStream.getTracks()[1], userStream);
        rtcPeerConnection.setRemoteDescription(offer);
        rtcPeerConnection
          .createAnswer()
          .then((answer) => {
            rtcPeerConnection.setLocalDescription(answer);
            socket.emit('answer', answer, roomName);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log('app offer: ', offer);
        console.log('offer rtcPeerConnection: ', rtcPeerConnection);
      }
    });
    // ---[6]
    socket.on('answer', function (answer) {
      rtcPeerConnection.setRemoteDescription(answer);
      console.log('answer rtcPeerConnection: ', rtcPeerConnection);
    });

    function OnIceCandidateFunction(event) {
      console.log('Candidate event: ', event);
      if (event.candidate) {
        socket.emit('candidate', event.candidate, roomName);
      }
    }

    function OnTrackFunction(event) {
      console.log('onTrackFunction event:', event);
      console.log(roomSize);
      let userArr = roomToUser[userToRoom[socket.id]];
      let idx = userArr.indexOf(socket.id);
      console.log(userArr, 'idx: ', idx);

      if (roomSize % idx === 0) {
        peerVideo1.current.srcObject = event.streams[0];
        peerVideo1.current.onloadedmetadata = function (e) {
          peerVideo1.current.play();
        };
        peerName1.current.insertAdjacentHTML(
          'beforeend',
          `<div>ID1 : ${userArr[1]}</div>`
        );
      } else if (roomSize % idx === 2) {
        peerVideo2.current.srcObject = event.streams[0];
        peerVideo2.current.onloadedmetadata = function (e) {
          peerVideo2.current.play();
        };
        peerName2.current.insertAdjacentHTML(
          'beforeend',
          `<div>ID2 : ${userArr[2]}</div>`
        );
      } else if (idx === 3) {
        peerVideo3.current.srcObject = event.streams[0];
        peerVideo3.current.onloadedmetadata = function (e) {
          peerVideo3.current.play();
        };
        peerName3.current.insertAdjacentHTML(
          'beforeend',
          `<div>ID3 : ${userArr[3]}</div>`
        );
      } else {
        console.log("There's no room for me.", socket.id, roomSize);
      }
    }
  }, []);

  return (
    <>
      {enterRoom || (
        <div id="video-chat-lobby">
          <h2 className="text">Video Chat Application</h2>
          <input
            ref={roomInput}
            id="roomName"
            type="text"
            placeholder="Room Name"
          />
          <button id="join" onClick={clickJoinBtn}>
            Join
          </button>
        </div>
      )}
      <div id="video-chat-room">
        <div>
          <video ref={userVideo} id="user-video"></video>
          <div ref={userName} style={{ textAlign: 'center' }}></div>
        </div>
        <div>
          <video ref={peerVideo1} id="peer-video1"></video>
          <div ref={peerName1} style={{ textAlign: 'center' }}></div>
        </div>
        <div>
          <video ref={peerVideo2} id="peer-video2"></video>
          <div ref={peerName2} style={{ textAlign: 'center' }}></div>
        </div>
        <div>
          <video ref={peerVideo3} id="peer-video3"></video>
          <div ref={peerName3} style={{ textAlign: 'center' }}></div>
        </div>
      </div>
    </>
  );
}

export default App;
