import { connectToServer } from './socket-client';
import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>
    <br/>

    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const inputJwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!;
const buttonConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

buttonConnect.addEventListener('click', () => {

  if ( inputJwtToken.value.trim().length <= 0) return alert('Enter a valid JWT');

  connectToServer(inputJwtToken.value.trim());
});
