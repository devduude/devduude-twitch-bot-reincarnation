import {
  handleHello,
  handleBye,
  handlePepe,
} from './messages';


function messageRouter ({ tags, message }) {
  const includesPepe = message.includes('FeelsOkayMan');

  if (includesPepe) return handlePepe(tags);

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
