const commandKeys = {
  en: { suggestion: [ 'suggestion', 'sugg', 'backseat' ] },
  ru: { suggestion: [ 'совет' ] },
};

const commandResponses = {
  en: {
    suggestion: [
      'your suggestion has been recorded, thank you!',
      'i took a note, thank you!',
      'thanks, now i can wipe my ass with your silly shit Kappa ',
    ],
  },
  ru: {
    suggestion: [
      'ваш совет был записан, спасибо!',
      'я записал :) ',
      'благодарю, теперь мне есть чем подтереться Kappa ',
    ],
  },
};


export {
  commandResponses,
  commandKeys,
};
