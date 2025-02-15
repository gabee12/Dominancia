const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Verifica o ping atual do bot'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...' });
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);

        interaction.followUp(`Websocket heartbeat: ${interaction.client.ws.ping}ms.`);
    }
 }