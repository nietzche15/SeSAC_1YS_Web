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
let roomList;
let roomUser;
let joinId;
let roomSize;

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
  const peerVideo0 = useRef();
  const peerName0 = useRef();
  const peerVideo1 = useRef();
  const peerName1 = useRef();
  const peerVideo2 = useRef();
  const peerName2 = useRef();

  const clickJoinBtn = () => {
    console.log('roomInput.current.value: ', roomInput.current.value);
    /* eslint-disable */
    roomInput.current.value === ''
      ? alert('Please enter a room name')
      : ((roomName = roomInput.current.value), socket.emit('join', roomName));
    setEnterRoom(true);
  };

  useEffect(() => {
    socket.on('created', () => {
      console.log('created');
      creator = true;

      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: { width: 640, height: 360 },
        })
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
      userName.current.innerHTML = `<div>ID : ${roomUser[socket.id]}</div>`;
    });
    socket.on('notice', (data) => {
      roomSize = data.roomSize;
      roomUser = data.roomUser;
      roomList = data.roomList;
      console.log('notice: ', roomSize, roomUser, roomList);
    });
    socket.on('joined', (data) => {
      console.log('joined');
      creator = false;
      joinId = data.joinId;
      console.log('joinId:', joinId);

      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: { width: 640, height: 360 },
        })
        .then(function (stream) {
          /* use the stream */
          userStream = stream;
          userVideo.current.srcObject = stream;
          userVideo.current.onloadedmetadata = function (e) {
            userVideo.current.play();
          };
          userName.current.innerHTML = `<div>ID2 : ${joinId}</div>`;
          socket.emit('ready', roomName);
        })
        .catch(function (err) {
          /* handle the error */
          alert("Couldn't Access User Media");
        });
    });
    socket.on('notice', (data) => {
      roomSize = data.roomSize;
      roomUser = data.roomUser;
      roomList = data.roomList;
      console.log('notice: ', roomSize, roomUser, roomList);
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
    socket.on('candidate', function (candidate) {
      console.log('app candidate: ', candidate);
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
        console.log('app offer: ', offer);
        console.log('offer rtcPeerConnection: ', rtcPeerConnection);
      }
    });

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
      console.log(roomSize);
      roomSize < 1
        ? ((peerVideo0.current.srcObject = event.streams[0]),
          (peerVideo0.current.onloadedmetadata = function (e) {
            peerVideo0.current.play();
          }),
          peerName0.current.insertAdjacentHTML(
            'beforeend',
            `<div>ID3 : ${roomUser[socket.id]}</div>`
          ))
        : ((peerVideo1.current.srcObject = event.streams[0]),
          (peerVideo1.current.onloadedmetadata = function (e) {
            peerVideo1.current.play();
          }),
          peerName1.current.insertAdjacentHTML(
            'beforeend',
            `<div>ID3 : ${roomUser[socket.id]}</div>`
          ));
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
      {enterRoom && (
        <div id="video-chat-room">
          <div>
            <video ref={userVideo} id="user-video"></video>
            <div ref={userName} style={{ textAlign: 'center' }}></div>
          </div>
          <div>
            <video ref={peerVideo0} id="peer-video0"></video>
            <div ref={peerName0} style={{ textAlign: 'center' }}></div>
          </div>
          <div>
            <video ref={peerVideo1} id="peer-video1"></video>
            <div ref={peerName1} style={{ textAlign: 'center' }}></div>
          </div>
          <div>
            <video ref={peerVideo2} id="peer-video2"></video>
            <div ref={peerName2} style={{ textAlign: 'center' }}></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
