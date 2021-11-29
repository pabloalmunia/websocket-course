/*
 * 02 example
 *
 * This example use the package ws.
 * Please, see its documentation in https://github.com/websockets/ws
 *
 */
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 9001 });

wss.on('connection', (ws) => {
  console.log('a client is connected');

  ws.on('message', (dataRaw) => {
    const data = dataRaw.toString();
    console.log('received:', data);
  });

  ws.on('close', () => {
    console.log('a client is disconnected');
  });

});