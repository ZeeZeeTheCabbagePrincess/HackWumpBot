const Discord = require("discord.js")
const Config = require("../config.json");
const prefix = Config.Prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`HackWump HELP`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setColor('RANDOM')
        .setDescription(`${message.author.username} check your dms!`)

        let Sembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`HackWump Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for the HackWump!\nThe bot prefix is: ${prefix}`)
        .addField(`Commands:`, "``Ping``")
        .setFooter("HackWump", bot.user.displayAvatarURL)
        message.channel.send(Sembed)
    }
