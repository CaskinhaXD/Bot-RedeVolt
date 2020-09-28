const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        Olá você pediu ajuda?
        
        *Vim aqui te ajudar* :grinning:

        **Categorias:**

        - **Administração** :desktop: : Utilize volt!helpadm para ver os comandos

        - **Diversão** :zany_face: : Utilize volt!helpdiversao para ver os comandos

        - **Sobre Mim** :robot: : Utilize volt!dev para ver os comandos

        - **Parceiros** :diamonds: : Utilize volt!helpyt para ver os comandos

        - **Geral** :flag_br: : Utilize volt!helpgeral para ver os comandos
  `)
  }
}