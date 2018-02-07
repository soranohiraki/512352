const Discord = require("discord.js");
const yt = require('ytdl-core');
const client = new Discord.Client()
const config = require("./config.json");
const embed = new Discord.RichEmbed()

client.on('ready', () => {
  client.user.setGame(`!도움말 을 쳐보세요.`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`!도움말 을 쳐보세요.`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`!도움말 을 쳐보세요.`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "핑") {
    
     message.delete().catch(O_o=>{});
   
    const m = await message.channel.send("핑이요?");
    m.edit(`퐁! 대기 시간은 ${m.createdTimestamp - message.createdTimestamp}ms 입니다. API 대기 시간은 ${Math.round(client.ping)}ms 입니다. ^^7`);
  }


 });

client.login(process.env.BOT_TOKEN);
