import { useRef, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

let socket = io.connect('http://localhost:8000');
let nickNameList;

socket.on('connect', () => {
  console.log('server connected');
});

// Connected Socket list
const showNameList = () => {
  return Object.keys(nickNameList).map((e, i) =>
    e === socket.id || e === 'admin' ? (
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

  const chatInput = useRef();
  const DMchatInput = useRef();
  const selectDM = useRef();
  const exitDMBtn = useRef();
  const chatBox = useRef();

  const showDM = () => {
    setDirect(!direct);
    selectDM.current.focus();
  };

  // Realtime User Notice
  socket.on('notice', (data) => {
    chatBox.current.insertAdjacentHTML(
      'beforeend',
      `<div class='chatIntro'>${data.msg}</div>`
    );
    nickNameList = data.nickNameList;
  });

  // MyChat 전송
  const sendChat = () => {
    socket.emit('sendChat', {
      user_id: socket.id,
      msg: chatInput.current.value,
    });
  };

  const enterSendChat = (e) => {
    if (e.key === 'Enter') sendChat();
  };

  // Chat Event 한번만 발생시킴
  useEffect(() => {
    // MyChat과 다른 Chat 구별하여 수신
    socket.on('getChat', (data) => {
      chatBox.current.insertAdjacentHTML(
        'beforeend',
        data.user_id === socket.id
          ? `<div class='MyChatBox'><div class='MyChat'>${data.msg}</div></div>`
          : `<div class='ServerChat'>${data.msg}</div>`
      );
    });

    // 보낸 DM과 받은 DM 구별하여 수신
    socket.on('getDM', (data) => {
      console.log('getDM');
      console.log('data : ', data);
      chatBox.current.insertAdjacentHTML(
        'beforeend',
        data.from_id === socket.id
          ? `<div class='MyChatBox'><div class='MyDM'>DM to ${
              nickNameList[data.to_id]
            } : ${data.msg}</div></div>`
          : `<div class='DirectChat'>${nickNameList[data.from_id]} : ${
              data.msg
            }</div>`
      );
    });
  }, []);

  // DM 보냄
  const sendDM = () => {
    socket.emit('sendDM', {
      from_id: socket.id,
      to_id: selectDM.current.value,
      msg: DMchatInput.current.value,
    });
    exitDMBtn.current.focus();
  };

  const enterSendDM = (e) => {
    if (e.key === 'Enter') sendDM();
  };

  //// UI -------------------------------------///
  return (
    <div id="chatBG">
      <div ref={chatBox} id="chatBox"></div>

      {/* DM O 입력창 */}
      {direct && (
        <InputGroup as={Row} id="DMinputBox">
          <Button
            as={Col}
            md={1}
            variant="light"
            ref={exitDMBtn}
            onClick={showDM}
            id="XdirectBtn"
          >
            X
          </Button>
          <Col md="2">
            <Form.Select ref={selectDM} id="selectDM">
              <option value="none">선택</option>
              {showNameList()}
            </Form.Select>
          </Col>
          <Col md="7">
            <Form.Control
              ref={DMchatInput}
              as="input"
              id="DMchatInput"
              onKeyDown={enterSendDM}
            />
          </Col>
          <Button
            as={Col}
            md={2}
            variant="secondary"
            onClick={sendDM}
            id="DMchatInputBtn"
          >
            SEND
          </Button>
        </InputGroup>
      )}

      {/* DM X 입력창 */}
      {direct || (
        <InputGroup as={Row} id="inputBox">
          <Button
            as={Col}
            md={2}
            variant="light"
            onClick={() => {
              setDirect(!direct);
            }}
            id="directBtn"
          >
            DM
          </Button>
          <Form.Control
            as={Col}
            md={8}
            as="input"
            ref={chatInput}
            id="chatInput"
            onKeyDown={enterSendChat}
          />
          <Button
            as={Col}
            md={2}
            variant="secondary"
            onClick={sendChat}
            id="chatInputBtn"
          >
            SEND
          </Button>
        </InputGroup>
      )}
    </div>
  );
}

export default App;
