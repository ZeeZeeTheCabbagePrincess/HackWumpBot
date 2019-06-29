const discord = require("discord.js");
const Config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you do not have permissions to use this command!');
    if (!target) return message.reply('please specify a member to kick!');
    if (!reason) return message.reply('please specify a reason for this kick!');
    let dm = target.user.dmChannel;
    if (!dm) dm = await target.createDM();

    await dm.send(`Hello, you have been Kicked from ${message.guild.name} for: ${reason}`);
    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Kicked Member', `${target.user.username}`)
        .addField('Kicked By', `${message.author.username}`)
        .addField('Kicked Time', message.createdAt)
        .addField('Kicked At', message.channel)
        .addField('Kicked Reason', reason)
        .setFooter('Kicked user information', target.user.displayAvatarURL);

    message.channel.send(embed);
    target.kick(reason);
};

module.exports.config = {
    "name": `kick`,
    "usage": `${Config.Prefix}kick [user]`,
    "aliases": ["Kick", "softBan"],
    "category": "miscellaneous",
    "description": "kicks the mentioned user",
    "accessableby": "Admin"
}