/*
 * 04 example
 *
 * Send data to the client
 * Obtain data from: https://es.lipsum.com/
 */
import { WebSocketServer } from 'ws';

const data = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Suspendisse aliquam est in ante pellentesque, id interdum sem venenatis.',
  'Nam tincidunt mauris sit amet scelerisque cursus.',
  'Morbi accumsan ligula quis ullamcorper vehicula.',
  'Curabitur pellentesque dui eu nunc dignissim, id dictum urna vulputate.',
  'Vestibulum consequat ex ac leo mattis, a interdum erat mollis.',
  'Integer ornare mauris eget leo bibendum feugiat.',
  'Ut et elit semper, tincidunt felis quis, lacinia est.',
  'Aliquam dapibus lorem non vestibulum consequat.',
  'Nulla sit amet sapien pellentesque ligula rhoncus gravida eu quis quam.',
  'Ut dignissim orci non mauris gravida efficitur.',
  'Aliquam tristique nisl eget felis pulvinar, a commodo augue auctor.',
  'Curabitur dignissim arcu elementum condimentum fermentum.',
  'Pellentesque eget felis at odio eleifend ultricies.',
  'Fusce posuere justo sit amet imperdiet posuere.',
  'Nulla semper nulla non sem mattis tristique.',
  'In sit amet nisl eu ipsum ornare efficitur et blandit odio.',
  'Proin vitae dolor egestas, tempor orci quis, scelerisque purus.',
  'Aliquam quis risus non diam ultricies bibendum non id tellus.',
  'Nulla sit amet ligula ut ligula efficitur dignissim.',
  'Sed tristique turpis a urna ultrices, nec fringilla eros scelerisque.',
  'In feugiat est ut lorem viverra, non accumsan libero pellentesque.',
  'Praesent ac nulla cursus tellus fermentum sodales.',
  'Sed sit amet justo eget mi suscipit ultrices non lobortis mauris.',
  'Duis tincidunt nisi vel diam sagittis feugiat.',
  'Morbi id nulla in libero tincidunt facilisis.',
  'Nullam facilisis odio nec tincidunt vehicula.',
  'Sed lobortis diam sed iaculis maximus.',
  'Integer in sapien vehicula, placerat ipsum luctus, volutpat nulla.',
  'Praesent non magna nec lectus tincidunt rutrum id non erat.',
  'Curabitur vel odio nec ante rhoncus sagittis sed eget quam.',
  'Phasellus feugiat nulla sit amet orci molestie, sed feugiat lorem dignissim.',
  'Phasellus feugiat neque nec enim feugiat luctus.',
  'Donec pharetra eros et nisl condimentum mattis.',
  'Nam porttitor lectus quis augue porta molestie.',
  'Sed at lectus eleifend, rutrum odio hendrerit, luctus lectus.'
];

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