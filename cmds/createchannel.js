const Config = require("../config.json");

module.exports.run = async(bot, message, args) => {
    if (args.length <= 0 || args.length > 2) return message.channel.send(`Invalid number of arguments.\n${help.usage}`);
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`You don't have the manage channels permission.`);

    let channelName = args[0];
    let isNSFW = false;
    if(args.length > 1)  isNSFW = args[1].toUpperCase() === `NSFW`;

    let channel = await message.guild.createChannel(channelName, {nsfw: isNSFW});

    return message.channel.send(`Channel ${channel} is created.`);
}

module.exports.config = {
    "name": `createchannel`,
    "usage": `${Config.prefix}createchannel <channel-name> [nsfw]`,
    "aliases": ["cc", "create"],
    "category": "miscellaneous",
    "description": "Creates new channel with channel-name and nsfw if specified",
    "accessableby": "Admin"
}