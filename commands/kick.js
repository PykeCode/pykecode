module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author}, você não tem permissão para usar esse comando.`)
    if(!message.guild.member(bot.user).hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author}, eu não tenho permissão para remover esse membro! 😦`)
  let member = message.mentions.members.first() || bot.users.get(args[0])
  
  if(!member) return message.channel.send(`${message.author}. você não mencionou ou indiciou o ID do usuário que deseja remover.`)
    let reason = args.slice(1).join(' ')
    if(!reason){
      reason = "sem motivos"
      
    }
    
member.kick(member.id, {reason: `Removido por ${message.author.tag} - Motivo: ${reason}`}).then(msg => { 
  message.channel.send(`${message.author}, usuário removido com sucesso! <:emoji_4:619915881526460456>`)
    });
    
    if(!message.guild.member(member)) return message.channel.send(`${message.author}, eu não posso remover esse usuário, talvez o cargo dele seja maior que o meu 😦`)
  }
  exports.config ={
    
    name: 'kick',
    aliases: ['remover'],
    category: 'mod'
    
    
  }