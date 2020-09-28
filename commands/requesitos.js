const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, :emoji_3: - Olá, venho dizer os requisitos para ser YouTuber de nosso servidor

YT+
500 INSCRITOS
20 likes
200 views
Pelo menos 3 MINUTOS DE VIDEO}
Cash Por Video: 10k

YT
100 INSCRITOS
10 likes
50 views
Pelo menos 3 MINUTOS DE VIDEO
Cash Por Video: 5k

MINI-YT
50 INSCRITOS
30 views
Pelo menos 3 MINUTOS DE VIDEO
Cash Por Video: 1k

Streamer+
300 seguidores
10 espectador por live
Cash por live: 5k

Streamer-
100 seguidores
5 espectadores por live
Cash por live: 2k

O youtuber deve usar isso na descrição;
IP: redevolt.purplehost.com.br
Discord: (Discord do server)
Loja: Chame 1 Master
Nick: (Seu Nick)
  `)
}
}