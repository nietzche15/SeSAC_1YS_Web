import './App.css';
import { io } from 'socket.io-client';
import { useRef, useState } from 'react';
let socket = io.connect('http://localhost:4000', {
  cors: { origin: '*' },
});
let roomName;
let creator = false;
let rtcPeerConnection;
let userStream;

let iceServers = {
  iceServers: [
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

function App() {
  const [enterRoom, setEnterRoom] = useState(false);
  const roomInput = useRef();
  const userVideo = useRef(null);
  const peerVideo = useRef(null);

  const clickJoinBtn = () => {
    console.log('roomInput.current.value: ', roomInput.current.value);
    /* eslint-disable */
    roomInput.current.value === ''
      ? alert('Please enter a room name')
      : ((roomName = roomInput.current.value), socket.emit('join', roomName));
  };

  socket.on('created', function () {
    creator = true;

    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 },
      })
      .then(function (stream) {
        console.log('userVideo: ', userVideo);
        console.log('stream: ', stream);
        userStream = stream;

        /* use the stream */
        console.log('userStream: ', userStream);

        setEnterRoom(true);
        userVideo.current.srcObject = userStream;
        userVideo.current.onloadedmetadata = function (e) {
          userVideo.play();
        };
      })
      .catch(function (err) {
        /* handle the error */
        alert("Couldn't Access User Media");
      });
  });

  socket.on('joined', function () {
    creator = false;

    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: { width: 1280, height: 720 },
      })
      .then(function (stream) {
        /* use the stream */
        userStream = stream;
        setEnterRoom(true);
        console.log('userVideo: ', userVideo);
        userVideo.current.srcObject = stream;
        userVideo.current.onloadedmetadata = function (e) {
          userVideo.play();
        };
        socket.emit('ready', roomName);
      })
      .catch(function (err) {
        /* handle the error */
        alert("Couldn't Access User Media");
      });
  });
  socket.on('full', function () {
    alert("Room is Full, Can't Join");
  });

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
          rtcPeerConnection.setLocalDescription(offer);
          socket.emit('offer', offer, roomName);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  });
  socket.on('candidate', function (candidate) {
    let icecandidate = new RTCIceCandidate(candidate);
    rtcPeerConnection.addIceCandidate(icecandidate);
  });

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
    }
  });

  socket.on('answer', function (answer) {
    rtcPeerConnection.setRemoteDescription(answer);
  });

  function OnIceCandidateFunction(event) {
    console.log('Candidate');
    if (event.candidate) {
      socket.emit('candidate', event.candidate, roomName);
    }
  }

  function OnTrackFunction(event) {
    console.log('peerVideo: ', peerVideo);

    peerVideo.current.srcObject = event.streams[0];
    peerVideo.current.onloadedmetadata = function (e) {
      peerVideo.play();
    };
  }

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
      {enterRoom && (
        <div id="video-chat-room">
          <div>
            <video ref={userVideo} id="user-video"></video>
          </div>
          <div>
            <video ref={peerVideo} id="peer-video"></video>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
