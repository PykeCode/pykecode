const Discord = require('discord.js');

exports.run = (client, message, args) => {


    let botEmbed = new Discord.RichEmbed()
    .setColor('#ff89ca')
    .setAuthor("Informações:")
    .setDescription("**Convite:** **[Clique Aqui!](https://discordapp.com/oauth2/authorize?client_id=565287677814112268&scope=bot&permissions=8)!**")
    .addField("Servidores", ":desktop:" + client.guilds.size, true)
    .addField("Usuários",  ":bust_in_silhouette:" + client.users.size, true)
    .addField("Canais", ":page_with_curl:" + client.channels.size, true )
    .addField("Versão do BOT", "1.0.0", true)
    .addField("País", ":flag_br: Brasil", true)
    .addField("Bibliotecas", ":book: Discord.js", true)


    message.channel.send(botEmbed);
}