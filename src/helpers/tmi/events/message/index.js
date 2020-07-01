import messageRouter from './messageRouter.js';
import commandRouter from './commandRouter.js';
import Timeouter from '../../../Timeouter.js';


async function handleMessageEvent ({ TMI, params }) {
  const [ channel, tags, message, self ] = params;

  if (self) return;

  const isCommand = message.split('')[0] == '!';

  let response;

  if (isCommand) response = commandRouter({ tags, message });
  else response = messageRouter({ tags, message });

  if (!response) return;

  const userIsBlocked = Timeouter.getBlockedUsers().includes(tags.username);

  if (!userIsBlocked) {
    Timeouter.timeoutUser({
      username: tags.username,
      // tmi: {
      //   cb: async (a, b) => TMI.say(a, b),
      //   channel,
      // },
    });

    await TMI.say(channel, response);
  }
}


export default handleMessageEvent;
