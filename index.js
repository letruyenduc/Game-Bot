require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");
const setupDatabase = require('./utils/setupDb');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions, // Added intent for message reactions
    IntentsBitField.Flags.DirectMessages, // Added intent for direct messages
    IntentsBitField.Flags.DirectMessageReactions, // Added intent for direct message reactions
  ],
});

eventHandler(client);
setupDatabase(client);

client.login(process.env.TOKEN);