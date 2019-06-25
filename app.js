const Discord = require('discord.js');
const fs = require('fs')
const Enmap = require('enmap')
const Config = require("./config.json");
const bot = new Discord.Client();

bot.on("ready", async () => {
	console.log('Logged in as:');
    console.log(bot.user.username + '(' + bot.user.id + ')');
    bot.user.setPresence({
        game: { 
            name: 'HackWeek',
            type: 'PLAYING'
        },
        status: 'dnd'
    })
})

bot.commands = new Enmap();

fs.readdir("./cmds/", (err, files) => {
	if(err) console.log(err);
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0)
	{
		console.log("No commands to load!");
		return;
	}
	files.forEach(file => {
		let props = require(`./cmds/${file}`);
		let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
	});
})

bot.login(Config.Token);
