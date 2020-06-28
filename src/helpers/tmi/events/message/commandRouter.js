import {
  handleHello,
  handleBye,
} from './commands';


function commandRouter ({ tags, message }) {
  switch (message) {
    case '!hello':
      return handleHello({ tags, message });
    case '!bye':
      return handleBye({ tags, message });

    default:
      break;
  }
}


export default commandRouter;
