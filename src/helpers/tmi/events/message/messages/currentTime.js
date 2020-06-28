function handleTime (tags) {
  const time = new Date().toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' });
  const response = `@${tags.username}, в Москве ${time} FeelsOkayMan `;

  return response;
}


export default handleTime;
