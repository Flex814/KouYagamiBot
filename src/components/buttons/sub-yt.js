module.exports = {
  data: {
    name: `sub-yt`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `https://youtube.com/channel/UCda5bdovz-NI_MARfgyad0g`,
    });
  },
};
