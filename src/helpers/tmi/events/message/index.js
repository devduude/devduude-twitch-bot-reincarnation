import messageRouter from './messageRouter.js';
import commandRouter from './commandRouter.js';


function handleMessageEvent ({ TMI, params }) {
  const [ channel, tags, message, self ] = params;

  if (self) return;

  const isCommand = message.split('')[0] == '!';

  let response;

  if (isCommand) response = commandRouter({ tags, message });
  else response = messageRouter({ tags, message });

  if (!response) return;

  TMI.say(channel, response);
}


export default handleMessageEvent;
