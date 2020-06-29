function handleHello ({ tags }) {
  const response = `@${tags.username}, heya!`;

  return response;
}


export default handleHello;
