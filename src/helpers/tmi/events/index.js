import handleMessageEvent from './message';


function initializeEvents (TMI) {
  TMI.on('chat', (...params) => handleMessageEvent({ TMI, params }));
}


export default initializeEvents;
