const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  const content = args.join(" ");

  if (!args[0]) {
    return message.channel.send(`${message.author.username}, Escreva apos o comando:
    - Nick:
    - Canal:
    - Tag:
    - Quantidade de Subs:
    - Link do Canal:
    - Link Video:
    `)
  } else {
    var canal = message.guild.channels.cache.find(ch => ch.id === "744550684741075006");
const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}