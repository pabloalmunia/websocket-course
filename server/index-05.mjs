/*
 * 05 example
 *
 * Echo
 */
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 9001 });

wss.on('connection', (ws) => {
  console.log('a client is connected');

  ws.on('message', (dataRaw) => {
    const data = dataRaw.toString();
    console.log('received:', data);
    ws.send(data);
  });

  ws.on('close', () => {
    console.log('a client is disconnected');
  });

});