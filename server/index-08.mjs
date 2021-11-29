/*
 * 06 example
 *
 * Simple chat
 */
import {WebSocketServer} from 'ws';

const wss          = new WebSocketServer({port: 9001});
const conversation = [];

wss.on('connection', (ws) => {
  console.log('a client is connected');

  ws.on('message', (dataRaw) => {
    const dataStr = dataRaw.toString();
    const data = JSON.parse(dataStr);
    data.date = new Date();
    console.log('received:', data);

    if (data.type === 'init') {
      ws.send(JSON.stringify({
        type: 'load',
        conversation
      }));
      return;
    }

    conversation.push(data);

    wss.clients.forEach((wsClient) => {
      wsClient.send(JSON.stringify(data));
    });
  });

  ws.on('close', () => {
    console.log('a client is disconnected');
  });

});