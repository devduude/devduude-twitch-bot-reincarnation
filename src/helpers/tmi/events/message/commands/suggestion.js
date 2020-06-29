import { fileSystem } from '../../../..';


function handleSuggestion ({ tags, message }) {
  if (message == '') return;

  const response = `@${tags.username}, your suggestion has been recorded, thank you!`;

  const date = new Date(parseInt(tags['tmi-sent-ts'], 10)).toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow', dateStyle: 'short', timeStyle: 'short' });

  fileSystem.writeToFile({ filePath: './output/suggestions.txt', data: `${tags.username} - ${date}\n${message}\n\n` });

  return response;
}


export default handleSuggestion;
