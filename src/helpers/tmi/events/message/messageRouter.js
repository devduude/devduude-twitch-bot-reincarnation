import {
  handleHello,
  handleBye,
} from './messages';


function messageRouter ({ tags, message }) {
  switch (message) {
    case '!hello':
      return handleHello({ tags, message });
    case '!bye':
      return handleBye({ tags, message });

    default:
      break;
  }
}


export default messageRouter;
