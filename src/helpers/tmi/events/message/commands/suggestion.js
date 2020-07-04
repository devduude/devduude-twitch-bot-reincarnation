import { fileSystem } from '../../../..';
import { commandResponses } from './constants.js';


function handleSuggestion ({ tags, message, locale }) {
  if (message == '') return;

  const responseArray = commandResponses[locale].suggestion;
  const responseMessage = responseArray[Math.floor(Math.random() * responseArray.length)];

  const response = `@${tags.username}, ${responseMessage}`;

  const date = new Date(parseInt(tags['tmi-sent-ts'], 10)).toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow', dateStyle: 'short', timeStyle: 'short' });

  fileSystem.writeToFile({ filePath: './output/suggestions.txt', data: `${tags.username} - ${date}\n${message}\n\n` });

  return response;
}


export default handleSuggestion;
