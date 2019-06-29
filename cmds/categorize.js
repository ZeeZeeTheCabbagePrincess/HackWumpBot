const Config = require("../config.json");

module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return message.channel.send(`Invalid number of arguments.\n${this.config.usage}`);
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`You don't have the manage channels permission.`);
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send(`You didn't mention a valid channel`);

    let categoryName = args.slice(1).join(' ');
    let category = message.guild.channels.find(channel => channel.name.toUpperCase() === categoryName.toUpperCase());
    if (!category || category.type != "category") return message.channel.send(`You didn't provide a valid category`);

    let newChannel = await channel.edit({parent: category});

    return message.channel.send(`${newChannel} has been moved to the ${category.name} category.`)
}

module.exports.config = {
    "name": `categorize`,
    "usage": `${Config.Prefix}categorize <mention_channel> <category_name>`,
    "aliases": ["categorizechannel", "cat"],
    "category": "miscellaneous",
    "description": "Moves mentioned channel under the provided category",
    "accessableby": "Admin"
}