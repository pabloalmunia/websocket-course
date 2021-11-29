## 04 - Recibir datos del servidor

### Introducción

- La comunicación por WebSocket es bidireccional:
  - El servidor puede enviar datos al cliente aunque este no los haya solicitado de forma explícita.
- Esta característica es la principal ventaja de WebSocket.

### Ejercicio

- Crea un nuevo servidor WebSocket en un fichero llamado `index-04.mjs`.
- Crea un `Array`  llamado `data` con varias líneas de texto. Si no se te ocurre nada, puedes usar el texto generado en https://es.lipsum.com/
- Envía los datos al cliente cuando se conecta, con un código parecido a este:
```js
const wss = new WebSocketServer({ port: 9001 });

wss.on('connection', (ws) => {
  let n = 0;
  const interval = setInterval(() => {
    if (n >= data.length) {
      return clearInterval(interval);
    }
    ws.send(data[n++]);
  }, 1000);
});
```
- Crea un nuevo fichero `index-04.html`
- Añade un `div`
- En un script te conectas con el servidor WebSocket con:
```js
const ws = new WebSocket('ws://localhost:9001');
```
- Captura el evento `onmessage` del WebSocket con una función que recibe un parámetro `msg`.
- Obtén los datos de `msg.data`.
- Añade estos datos al final del `div` que has creado.