import handleMessageEvent from './message';


function initializeEvents (TMI) {
  TMI.on('message', (...params) => handleMessageEvent({ TMI, params }));
}


export default initializeEvents;
