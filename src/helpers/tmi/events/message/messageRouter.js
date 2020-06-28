import { handlePepe } from './messages';


function messageRouter ({ tags, message }) {
  /**
   * FIXME: Look closer at this, as this may have to be refactored
   */
  switch (message) {
    case message.includes('FeelsOkayMan'):
      return handlePepe({ tags, message });

    default:
      break;
  }
}


export default messageRouter;
