import { messageResponses } from './constants.js';


function handleHello ({ tags, locale }) {
  const responseArray = messageResponses[locale].hello;
  const responseMessage = responseArray[Math.floor(Math.random() * responseArray.length)];

  const response = `@${tags.username}, ${responseMessage}`;

  return response;
}


export default handleHello;
