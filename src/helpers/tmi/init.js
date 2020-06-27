import tmi from 'tmi.js';
import config from 'config';

/**
 * Twitch Messaging Interface
 */
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


export default client;
