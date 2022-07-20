// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
