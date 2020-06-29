import {
  handleHello,
  handleBye,
  handleSuggestion,
} from './commands';


function commandRouter ({ tags, message }) {
  const messageArray = message.split(' ');
  const command = messageArray.shift();
  const parsedMessage = messageArray.join(' ');

  switch (command) {
    case '!hello':
      return handleHello({ tags });

    case '!bye':
      return handleBye({ tags });

    case '!suggestion':
    case '!совет':
      return handleSuggestion({ tags, message: parsedMessage });

    default:
      break;
  }
}


export default commandRouter;
