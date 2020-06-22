import tmi from "tmi.js";


const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: "bot-name",
    password: "oauth:my-bot-token",
  },
  channels: [ "my-channel" ],
});
client.connect();
client.on("message", (channel, tags, message, self) => {
  if (self) {
    return;
  }
  if (message.toLowerCase() === "!hello") {
    client.say(channel, `@${tags.username}, heya!`);
  }
});


export default client;
