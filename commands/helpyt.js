const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos para os Parceiros*

        *Aqui estão.*
        
        **Commands:**

        :white_small_square: **volt!requesitos** :page_facing_up: : *Este comando mostra todos os requesitos para a tag YouTuber no server*

        :white_small_square: **volt!solicitartag** :page_with_curl: : *Este comando te manda um formulário para você responder e solicitar sua tag*
  `)
  }
}