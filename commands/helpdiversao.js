const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos para Diversão*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **volt!fds** :crossed_swords: : *Este comando faz com que você mande o foda-se para um player*

        :white_small_square: **volt!coinflip** :moneybag: : *Este comando te da duas opções cara ou coroa e ele sorteia se vai cair cara ou coroa*

        :white_small_square: **volt!sherek** :sparkles: : *Este comando sumona um sherek bem na sua tela*

        :white_small_square: **volt!kiss** :kiss: : *Este comando faz com que você possa beijar um player*

        :white_small_square: **volt!mchead** :grinning: : *Este comando mostra a cabeça do player que você escolher* 
        `)
  }
}