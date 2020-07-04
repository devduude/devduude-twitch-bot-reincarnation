import {
  commandKeys,
  handleSuggestion,
} from './commands';


function commandRouter ({ tags, message }) {
  const messageArray = message.split(' ');
  const command = messageArray.shift()
    .substring(1)
    .toLowerCase();
  const parsedMessage = messageArray.join(' ');

  /** FIXME: optimize this shit */
  const isRUSuggestionTriggered = commandKeys.ru.suggestion.includes(command);
  const isENSuggestionTriggered = commandKeys.en.suggestion.includes(command);
  if (isRUSuggestionTriggered) return handleSuggestion({ tags, locale: 'ru', message: parsedMessage });
  else if (isENSuggestionTriggered) return handleSuggestion({ tags, locale: 'en', message: parsedMessage });
}


export default commandRouter;
