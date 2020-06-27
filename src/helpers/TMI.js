import tmi from 'tmi.js';
import config from 'config';


const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: 'bashduude',
    password: config.get('tmi.password'),
  },
  channels: [ 'bashduude' ],
});

// client.connect();
// client.on('message', (channel, tags, message, self) => {
//   if (self) {
//     return;
//   }
//   if (message.toLowerCase() === '!hello') {
//     client.say(channel, `@${tags.username}, heya!`);
//   }
// });


export default client;
