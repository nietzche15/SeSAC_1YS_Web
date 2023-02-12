import React from 'react';

export default function Lobby() {
  return (
    <div>
      <h2 class="text">Video Chat Application</h2>
      <input id="roomName" type="text" placeholder="Room Name" />
      <button id="join">Join</button>
    </div>
  );
}
