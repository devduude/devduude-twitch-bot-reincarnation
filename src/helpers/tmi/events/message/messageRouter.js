import { handleHello } from './messages';


function messageRouter ({ tags, message }) {
  switch (message) {
    case '!hello':
      return handleHello({ tags, message });

    default:
      break;
  }
}


export default messageRouter;
