function handleBye ({ tags }) {
  const response = `@${tags.username}, thanks for hanging out with us today, bye! :) `;

  return response;
}


export default handleBye;
