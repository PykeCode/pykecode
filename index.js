/* global Map */
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require('discord.js');
const config = require('./config.json');
const db = require('quick.db');
const utils = require("./utils.js");
const cooldown = require("./cooldown.js");


const client = new Discord.Client();
client.prefix = config.prefix;

const active = new Map();

client.on('ready', () => {
  console.log("Estou online!")
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'meu Prefixo é: !',
            type: "STREAMING",
            url: "https://www.twitch.tv/hyoissei1"
        }
    });
});



client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;
  let user = message.author;
  
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0;
  let total_points = await db.fetch(`total_points_${user.id}`);
  if(total_points === null) total_points = 0;
  
  if (!cooldown.is(user.id)) {
    cooldown.add(user.id);
    var add = Math.floor(Math.random() * 15) + 10;
    db.add(`xp_${user.id}`, add);
    db.add(`total_points_${user.id}`, add);
    setTimeout(() => {
      cooldown.remove(user.id);
    }, 1000 * 60);
  }
  
    while (xp >= utils.need(level+1)) {
    if (xp >= utils.need(level+1)) {
      db.subtract(`xp_${user.id}`, utils.need(level+1));
      db.add(`level_${user.id}`, 1);
      xp = await db.fetch(`xp_${user.id}`);
      level = await db.fetch(`level_${user.id}`);
      let embed = new Discord.RichEmbed()
        .setAuthor("LEVEL 🆙!")
        .setDescription("Você foi para o **nível " + level + "**!")
        .setColor('#ff89ca');
      message.channel.send(embed);
    }
  }
  
  



    if(message.content.indexOf(client.prefix) !== 0) return;
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    try{
      
      let ops = {
      active: active
      }
      
        let commands = require(`./commands/${command}.js`);
        commands.run(client, message, args, ops);

    } catch (e) {
        console.log(e);
    }finally{}


});


client.on("guildMemberAdd", async member =>{
    client.channels.get('611637285062049870').send(`**:tada: Ohh! novo membro na área!**\n\n Seja bem-vindo **${member.user.username}**, ao servidor **${member.guild.name}**:tada: `);


});

client.on("guildMemberRemove", async member => {
    client.channels.get('611637285062049870').send(`:wave: Até mais **${member.user.username}!**\n\n o servidor **${member.guild.name}** agradece!:cry: `);
  });
  
  client.on("guildCreate", async guild => {
    client.channels.get('565391855660040202').send(`**:tada:Novo servidor:\n **${guild.name}**\n **Dono:** **${guild.owner.user.username}**\n**Total de membros:** **${guild.memberCount}**`);
  });
  
  client.on("guildDelete", async guild => {
    client.channels.get('565391855660040202').send(`Removida do servidor: **${guild.name}**`);
  });

client.login(process.env.TOKEN);
