function handleBye ({ tags, message }) {
  const response = `@${tags.username}, thanks for hanging out with us today, bye! :) `;

  return response;
}


export default handleBye;
