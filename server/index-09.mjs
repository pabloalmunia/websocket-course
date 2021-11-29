/*
 * 09 example
 *
 * Rooms
 */
import {WebSocketServer} from 'ws';

const wss   = new WebSocketServer({port: 9001});
const rooms = {};

wss.on('connection', (ws) => {
  console.log('a client is connected');

  ws.on('message', (dataRaw) => {
    const dataStr = dataRaw.toString();
    const data    = JSON.parse(dataStr);
    data.date     = new Date();
    console.log('received:', data);

    // Create a new room
    if (!rooms[data.room]) {
      rooms[data.room] = {
        users       : {},
        conversation: []
      };
    }

    if (data.type === 'init') {
      ws.userId = data.id;
      for (let roomId in rooms) {
        if (rooms[roomId].users === data.id) {
          delete rooms[roomId].users[data.id];
        }
      }
      rooms[data.room].users[data.id] = true;
      ws.send(JSON.stringify({
        type        : 'load',
        room        : data.room,
        conversation: rooms[data.room].conversation || []
      }));
      return;
    }

    rooms[data.room].conversation.push(data);

    wss.clients.forEach((client) => {
      if (rooms[data.room].users[client.userId]) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', () => {
    console.log('a client is disconnected');
  });

});