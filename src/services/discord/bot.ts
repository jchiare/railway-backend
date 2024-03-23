import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import type { DiscordMessage } from "./message";

export class DiscordBot {
  private client: Client;

  constructor(private token: string) {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
      ]
    });
    this.initialize();
  }

  private initialize(): void {
    this.client.once(Events.ClientReady, readyClient => {
      console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });
    this.client.login(this.token);
  }

  public handleStreamMessage(handler: DiscordMessage): void {
    this.client.on("messageCreate", (message: Message) => {
      handler.handleStream(message);
    });
  }
}
