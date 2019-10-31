module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author}, você não tem permissão para usar esse comando.`)
  if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author}, eu não tenho permissão para banir membros 😦`)
let member = message.mentions.users.first() || bot.users.get(args[0])

if(!member) return message.channel.send(`${message.author}. você não mencionou ou indiciou o ID do usuário que deseja banir.`)
  let reason = args.slice(1).join(' ')
  if(!reason){
    reason = "sem motivos"
    
  }
  
  message.guild.ban(member.id, {days: 7, reason: `Banido por ${message.author.tag} - Motivo: ${reason}`}).then(msg => { 
message.channel.send(`${message.author}, usuário banido com sucesso! <:emoji_4:619915881526460456>`)
  });
  
  if(!message.guild.member(member).bannable) return message.channel.send(`${message.author}, eu não posso banir esse usuário, talvez o cargo dele seja maior que o meu 😦`)
}
exports.config ={
  
  name: 'ban',
  aliases: ['banir'],
  category: 'mod'
  
  
}