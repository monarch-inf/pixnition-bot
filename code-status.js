static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "MANAGESERVER:";
    discordPresence.details = "PixNition BOT";
    discordPresence.startTimestamp = 7.837373637373748e+21;
    discordPresence.endTimestamp = 2000000000000000000;
    discordPresence.largeImageText = "Numbani";
    discordPresence.smallImageText = "Rogue - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 8372737373773738000;
    discordPresence.partyMax = 5736287373777;
    discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
    Discord_UpdatePresence(&discordPresence);
}
