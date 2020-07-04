import {
  handlePepe,
  handleTime,
  handleVoHiYo,
  messsageKeys,
  handleBye,
  handleHello,
} from './messages';


function messageRouter ({ tags, message }) {
  const messageArray = message.toLowerCase().split(' ');

  const isPepeTriggered = message.toLowerCase().includes('feelsokayman');
  if (isPepeTriggered) return handlePepe(tags);

  const isVoHiYoTriggered = message.toLowerCase().includes('vohiyo');
  if (isVoHiYoTriggered) return handleVoHiYo();

  const isHandleTimeTriggered = /сколько время/.test(message.toLowerCase());
  if (isHandleTimeTriggered) return handleTime(tags);

  /** FIXME: optimize this shit */
  const isRUByeTriggered = messageArray.some((value) => messsageKeys.ru.bye.includes(value));
  const isENByeTriggered = messageArray.some((value) => messsageKeys.en.bye.includes(value));
  if (isRUByeTriggered) return handleBye({ tags, locale: 'ru' });
  else if (isENByeTriggered) return handleBye({ tags, locale: 'en' });

  const isRUHelloTriggered = messageArray.some((value) => messsageKeys.ru.hello.includes(value));
  const isENHelloTriggered = messageArray.some((value) => messsageKeys.en.hello.includes(value));
  if (isRUHelloTriggered) return handleHello({ tags, locale: 'ru' });
  else if (isENHelloTriggered) return handleHello({ tags, locale: 'en' });
}


export default messageRouter;
