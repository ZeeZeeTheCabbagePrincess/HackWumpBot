
module.exports.run = async (bot, message, args) => {
    message.channel.send("bread?").catch(console.error);
 }

module.exports.config= {
    "name": "bread",
    "aliases": ["h", "halp", "commands"],
    "usage": "(command)",
    "category": "miscellaneous",
    "description": "Displays all commands that the bot has.",
    "accessableby": "Members"
}