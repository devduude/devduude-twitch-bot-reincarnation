function handleTime (tags) {
  const time = new Date().toLocaleTimeString();
  const response = `@${tags.username}, ${time} FeelsOkayMan `;

  return response;
}


export default handleTime;
