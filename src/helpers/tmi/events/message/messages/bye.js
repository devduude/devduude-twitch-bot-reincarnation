import { messageResponses } from './constants.js';


function handleBye ({ tags, locale }) {
  const responseArray = messageResponses[locale].bye;
  const responseMessage = responseArray[Math.floor(Math.random() * responseArray.length)];

  const response = `@${tags.username}, ${responseMessage}`;

  return response;
}


export default handleBye;
