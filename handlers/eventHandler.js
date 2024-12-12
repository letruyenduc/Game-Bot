const path = require("path");
const getAllFiles = require("../utils/getAllFiles");

module.exports = (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true);

  for (const eventFolder of eventFolders) {
    let eventFiles = getAllFiles(eventFolder);
    eventFiles.sort();

    const eventName = eventFolder.replace(/\\/g, "/").split("/").pop();

    client.on(eventName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg);
      }
    });
  }
  
  client.on('messageCreate', (message) =>{
    if(message.content === 'jiggly'){
      message.channel.send('puff');
    }
  });
  

  client.on('messageCreate', (message) => {
    if (message.content === 'React please') {
        message.react('😎'); // Ajoute une réaction cool au message.
        message.react('👍'); // Ajoute un pouce en l’air.
      }
  });

  client.on('messageReactionAdd', (reaction, user) => {
      if (reaction.emoji.name === '👍') {
          reaction.message.reply(`${user.username} a donné un pouce bleu ! Merci 👏 !`);
      }
  });

  client.on('messageCreate', (message) =>{
    if(message.content === 'help'){
      message.reply('No help for you');
    }
  });
  client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Prevents the bot from responding to itself
    if (/^Hello/.test(message.content)) {
      message.reply('Hello there!');
    }
  });
  client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Prevents the bot from responding to itself
    if (/^hello$/i.test(message.content)) {
      message.reply('Good bye !');
    }
  });
  

};
