const { SlashCommandBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Return my ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${
      message.createTimestamp - interaction.createTimestamp
    }`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
