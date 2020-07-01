import handleMessageEvent from './message';


async function initializeEvents (TMI) {
  await TMI.on('chat', (...params) => handleMessageEvent({ TMI, params }));
}


export default initializeEvents;
