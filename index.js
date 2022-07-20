// Require the necessary discord.js classes
require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { IntentsBitField } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Simple Ping pong message
client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("pong!");
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
