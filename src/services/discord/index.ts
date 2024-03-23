import { DiscordBot } from "./bot";
import { DiscordMessage as ImportedDiscordMessage } from "./message";

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
if (!DISCORD_TOKEN) {
  throw new Error("Discord token not found");
}

export const discordBot = new DiscordBot(DISCORD_TOKEN);
export const DiscordMessage = ImportedDiscordMessage;
