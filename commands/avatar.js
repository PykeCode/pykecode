const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel
    .send("Gerando imagem...")
  let user = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
    .setDescription(message.author)
    .setColor("RANDOM")
    .setImage(user.avatarURL);
  message.channel.send(embed);
};
