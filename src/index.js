import { TMI } from './helpers';


function name (params) {
  TMI.connect();
  TMI.on('message', (channel, tags, message, self) => {
    if (self) {
      return;
    }
    if (message.toLowerCase() === '!hello') {
      TMI.say(channel, `@${tags.username}, heya!`);
    }
  });
}


export default name;
