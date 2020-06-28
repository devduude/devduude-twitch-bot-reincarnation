import {
  handlePepe,
  handleTime,
} from './messages';


function messageRouter ({ tags, message }) {
  const isPepeTriggered = message.toLowerCase().includes('feelsokayman');
  if (isPepeTriggered) return handlePepe(tags);

  const isHandleTimeTriggered = /сколько время/.test(message.toLowerCase());
  if (isHandleTimeTriggered) return handleTime(tags);
}


export default messageRouter;
