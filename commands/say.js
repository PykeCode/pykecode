exports.run = (client, message, args) => {
    if (message.author.id === "485661304158421000") {
      if (args.length === 0) {
        message.channel.send("**" + message.author.username + "**, use: `!say <mensagem>`");
      } else {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
      } 
    } else {
      message.channel.send("**" + message.author.username + "**, Você não é o BEEMO DELICIA para usar esse comando" `<:emoji_4:619915881526460456>`);
    }
}