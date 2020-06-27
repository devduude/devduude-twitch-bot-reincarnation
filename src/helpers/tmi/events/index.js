import handleMessage from './message';


function initializeEvents (TMI) {
  TMI.on('message', (...params) => handleMessage({ TMI, params }));
}


export default initializeEvents;
