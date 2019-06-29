
module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send(`Pong! Latency is ${Math.round(bot.ping)}ms`);
  
 }

module.exports.config= {
    "name": "ping",
    "aliases": ["P", "Ping", "p"],
    "usage": "hw!ping",
    "category": "miscellaneous",
    "description": "Displays all commands that the bot has.",
    "accessableby": "Members"
}
