case "jadibot":
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, client, from);
        break;
