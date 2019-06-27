const Discord = require('discord.js');
const Config = require("../config.json");

module.exports = (bot, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(Config.Prefix) !== 0) return;
    const args = message.content.slice(Config.Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = bot.commands.get(command);
    if (!cmd) return;
    cmd.run(bot, message, args);
  };