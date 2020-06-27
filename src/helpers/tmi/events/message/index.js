import messageRouter from './messageRouter.js';


function handleMessage ({ TMI, params }) {
  const [ channel, tags, message, self ] = params;

  if (self) return;

  const response = messageRouter({ tags, message });

  if (!response) return;

  TMI.say(channel, response);
}


export default handleMessage;
