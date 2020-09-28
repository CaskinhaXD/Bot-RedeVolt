const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos gerais*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **volt!avatar** :frame_photo: : *Mostra o avatar do player que você citar*

        :white_small_square: **volt!convite** :envelope: : *O bot te mostra um convite para você enviar a seus amigos*

        :white_small_square: **volt!ideia / volt!sugestao** :envelope_with_arrow: : *Você envia uma sugestão para o server*

        :white_small_square: **volt!serverinfo** :toolbox: : *Este comando mostra especificações do discord*

        :white_small_square: **volt!lembrar** :diamonds: : *Este comando faz com que o bot te chame apos um certo tempo*
  `)
  }
}