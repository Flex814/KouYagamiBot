const { SlashCommandBuilder } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `This is a test! Congratulations! You're soooooo smart!`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
