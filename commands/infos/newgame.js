const {SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder} = require("discord.js");

let data = new SlashCommandBuilder()
    .setName("newgame")
    .setDescription("Start a new game")
    .setDescriptionLocalizations({
        fr: "Commencer une nouvelle partie"
    })
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
    .setDMPermission(false)
    .addStringOption(option => option
        .setRequired(true)
        .setName("game")
        .setNameLocalizations({
            fr: "jeu"
        })
        .setDescription("Game name")
        .setDescriptionLocalizations({
            fr: "Nom du jeu"
        })
        .addChoices(
            { name: 'Paperclip incremental', value: 'Paperclip' },
            { name: 'Checkers', value: 'checkers' },
            { name: 'Poker', value: 'poker' }
        )
    );

module.exports = {
    data: data,

    callback: async (client, interaction) => {
        const embed = {
            color: 0x0099ff,
            title: 'Game started',
            description: `Game ${interaction.options.getString('game')} started`,
            timestamp: new Date(),
            footer: {
                text: `Started by ${interaction.user.username}`,
            }
        };
        if (interaction.options.getString('game') === 'Paperclip') {
            const game = require('../../games/paperclip');
            game.start(client, interaction);
        }
        interaction.reply({embeds: [embed]});
    },
};