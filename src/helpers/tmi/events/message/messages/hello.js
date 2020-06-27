function handleHello ({ tags, message }) {
  const response = `@${tags.username}, heya!`;

  return response;
}


export default handleHello;
