const Config = require("../config.json");

module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return message.channel.send(`Invalid number of arguments.\n${this.config.usage}`);
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`You don't have the manage channels permission.`);

    let roleName = args.slice(0, -1).join(' ');
    let roleColor = args[args.length-1];

    await message.guild.createRole({
        name: roleName,
        color: roleColor
    });

    return message.channel.send(`Role ${roleName} has beend created.`);

}

module.exports.config = {
    "name": `createrole`,
    "usage": `${Config.Prefix}createrole <role name> <hex color>`,
    "aliases": ["cr", "creater"],
    "category": "miscellaneous",
    "description": "Creates new role with role name and color if specified",
    "accessableby": "Admin"
}