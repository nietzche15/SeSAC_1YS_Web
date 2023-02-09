import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

let socket = io.connect('http://localhost:8000');
let nickNameList;

socket.on('connect', () => {
  console.log('server connected');
});

// Realtime User Notice
socket.on('notice', (data) => {
  document.getElementById('chatIntro').innerText = data.msg;
  nickNameList = data.nickNameList;
});

// MyChat 전송
const sendChat = () => {
  socket.emit('sendChat', {
    user_id: socket.id,
    msg: document.getElementById('chatInput').value,
  });
};

// MyChat과 다른 Chat 구별하여 수신
socket.on('getChat', (data) => {
  document
    .getElementById('chatBox')
    .insertAdjacentHTML(
      'beforeend',
      data.user_id == socket.id
        ? `<div class='MyChatBox'><div class='MyChat'>${data.msg}</div></div>`
        : `<div class='ServerChat'>${data.msg}</div>`
    );
});

// 보낸 DM과 받은 DM 구별하여 수신
socket.on('getDM', (data) => {
  document
    .getElementById('chatBox')
    .insertAdjacentHTML(
      'beforeend',
      data.from_id == socket.id
        ? `<div class='MyChatBox'><div class='MyDM'>DM to ${
            nickNameList[data.to_id]
          } : ${data.msg}</div></div>`
        : `<div class='DirectChat'>${
            nickNameList[data.from_id] || 'Server'
          } : ${data.msg}</div>`
    );
});

// Connected Socket list
const showNameList = () => {
  return Object.keys(nickNameList).map((e, i) =>
    e == socket.id ? (
      false
    ) : (
      <option key={i} value={e}>
        {nickNameList[e]}
      </option>
    )
  );
};

function App() {
  const [direct, setDirect] = useState(false);

  const selectDM = useRef();
  const exitDMBtn = useRef();

  const showDM = () => {
    setDirect(!direct);
    selectDM.current.focus();
  };

  // DM 보냄
  const sendDM = () => {
    socket.emit('sendDM', {
      from_id: socket.id,
      to_id: selectDM.current.value,
      msg: document.getElementById('DMchatInput').value,
    });
    exitDMBtn.current.focus();
  };

  //// UI -------------------------------------///
  return (
    <div id="chatBG">
      <div id="chatIntro"></div>
      <div id="chatBox"></div>

      {/* DM O 입력창 */}
      {direct && (
        <div id="DMinputBox">
          <button ref={exitDMBtn} onClick={showDM} id="XdirectBtn">
            X
          </button>
          <select ref={selectDM} id="selectDM">
            {showNameList()}
          </select>
          <input type="text" id="DMchatInput" />
          <button onClick={sendDM} id="DMchatInputBtn">
            SEND
          </button>
        </div>
      )}

      {/* DM X 입력창 */}
      {direct || (
        <div id="inputBox">
          <button
            onClick={() => {
              setDirect(!direct);
            }}
            id="directBtn"
          >
            DM
          </button>
          <input type="text" id="chatInput" />
          <button onClick={sendChat} id="chatInputBtn">
            SEND
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
