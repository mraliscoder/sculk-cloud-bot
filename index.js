require("dotenv").config();
if (process.env.TOKEN === undefined) {
    process.exit(100);
}

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    client.user.setPresence({
      activities: [{ name: `sculk.cloud`, type: ActivityType.Watching }],
      status: 'dnd',
    });
});

client.login(process.env.TOKEN);
