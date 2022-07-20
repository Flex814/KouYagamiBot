const { SlashCommandBuilder, EmbedBuilder, Embed } = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Return an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`This is an EMBED!`)
      .setDescription(`This is a very cool description!`)
      // .setColor(client.color)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .setAuthor({
        url: `https://www.youtube.com/channel/UCda5bdovz-NI_MARfgyad0g`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      .setURL(`https://github.com/Flex814`)
      .addFields([
        { name: `Field 1`, value: `Value 1`, inline: true },
        { name: `Field 2`, value: `Value 2`, inline: true },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
