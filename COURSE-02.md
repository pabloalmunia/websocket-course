## 02 - Enviar datos a un servidor WebSocket

### Introducción

- Para crear un servidor WebSocket en node utilizamos la librería `WS`.
- Para crear un cliente WebSocket en el browser utilizamos el API estándar `WebSocket` que tienen todos los navegadores.
- Ver [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications).
- Ver [CanIUse](https://caniuse.com/websockets).

### Ejercicio

- Crea una carpeta `server` y entra dentro de ella con una consola.
- Inicializa NPM con `npm init`.
- Instala ws como paquete node con `npm install ws`.
- Crea un fichero `index-02.mjs` 
- Escribe en él un código similar a este:
```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 9001 });

wss.on('connection', (ws) => {
  console.log('a client is connected');

  ws.on('message', (dataRaw) => {
    const data = dataRaw.toString();
    console.log('received:', data);
  });

  ws.on('close', () => {
    console.log('a cliente is disconnected');
  });

});
``` 
- Copia la página anterior como `index-02.html`
- En vez de enviar los datos del `textarea` a la consola, envía los datos al servidor, para ello:
  - abre la conexión WebSocket con `const ws = new WebSocket('ws://localhost:9001');`
  - envía los datos con `ws.send(text.value);`
  - una vez enviado, borra el contenido del `textarea` con algo como `text.value = ''`;

