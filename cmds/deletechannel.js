const Config = require("../config.json");

module.exports.run = async(bot, message, args) => {
    if (args.length < 0 || args.length >=    2) return message.channel.send(`Invalid number of arguments.\n${this.config.usage}`);
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`You don't have the manage channels permission.`);    
    if(args.length != 0 && !(message.mentions.channels.first())) return message.channel.send(`You didn't mention a valid channel`);

    let delChannel = message.mentions.channels.first() || message.channel;
    let delChannelName = delChannel.name;

    await delChannel.delete();

    let reportChannel = message.guild.channels.filter(channel => channel.type === `text`).first();
    
    if(args.length != 0) reportChannel = message.channel;

    reportChannel.send(`Channel ${delChannelName} has been deleted`);
}

module.exports.config = {
    "name": `deletechannel`,
    "usage": `${Config.Prefix}createchannel [mention-channel]`,
    "aliases": ["dc", "delete"],
    "category": "miscellaneous",
    "description": "Deletes mentioned channel or current channel if none mentioned",
    "accessableby": "Admin"
}