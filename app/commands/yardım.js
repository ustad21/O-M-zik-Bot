const Discord = require("discord.js");
const { PREFIX } = require("../config.json");
module.exports = {
  name: "yardım",
  description: "müzikyardım",
  execute(client, message) {
    message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `
\`${PREFIX}play <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${PREFIX}skip\` : **Sıradaki Şarkıyı atlar.**
\`${PREFIX}döngü\` : **O Anki şarkıyı Hep tekrarlar.**
\`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
\`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
\`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**



`
      )
    );
  },
};
