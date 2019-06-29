const Config = require("../config.json");

module.exports.run = async(bot, message, args) => {
    if (args.length < 2) return message.channel.send(`Invalid number of arguments.\n${this.config.usage}`);
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`You don't have the manage channels permission.`);

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!target) return message.channel.send('Please specify a member to add role too.');

    let roleName = args.slice(1).join(' ');
    let role = message.guild.roles.find(role => role.name.toUpperCase() === roleName.toUpperCase());
    if (!role) return message.channel.send(`Please specify a valid role or create desired role`);
    if (role.position >= message.member.highestRole.position) return message.channel.send(`You cannot assign higher or same role as your highest role.`);
    if (role.position >= message.guild.member(bot.user).highestRole.position) return message.channel.send(`I cannot assign higher or same role as my highest role.`);

    if (target.roles.find(r => r.id === role.id)) return message.channel.send(`Member already has this role`);

    await target.addRole(role);

    return message.channel.send(`Role ${roleName} has been added to member ${target.displayName}`);
}

module.exports.config = {
    "name": `addrole`,
    "usage": `${Config.Prefix}createrole <mention user> <role name>`,
    "aliases": ["ar", "addr"],
    "category": "miscellaneous",
    "description": "Adds provided role to mentioned user",
    "accessableby": "Admin"
}