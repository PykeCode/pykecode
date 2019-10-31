const Discord = require("discord.js");

exports.run = (bot, message, args)=>{

  message.delete();
  
  let splitarg = args.join(" ").split(" / ");

  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMNISTRATOR")){
    return message.reply("Você não tem permissão para usar este comando!");
    
  }
  if(args.length === 0){
    return message.reply("Utilize: !anunciar **Título** e o **Anuncio**!");
  }
  
  let aTitle = splitarg[0];
  let aAnnouncement = splitarg[1];
  
  if(!aAnnouncement){
    return message.reply("Coloque o anúncio...!");
  }
  
 
  
  let aEmbed = new Discord.RichEmbed()
  
  .setTimestamp()
  .setTitle(aTitle)
  .setColor("RANDOM")
  .setDescription(aAnnouncement)
  .setFooter(`Anunciante: ${message.author.username}`)
  
  message.channel.send(aEmbed);

}


exports

exports.help = {
 name: "anunciar" 
}