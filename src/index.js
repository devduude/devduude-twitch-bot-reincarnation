import { TMI } from './helpers';


async function app (params) {
  try {
    await TMI.client.connect();
    await TMI.initializeEvents(TMI.client);

  } catch (error) {
    console.log(error);

    await TMI.client.disconnect();
  }
}


export default app;
