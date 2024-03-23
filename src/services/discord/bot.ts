import { Client, Events, GatewayIntentBits, Message } from "discord.js";
import { DiscordMessage } from "./message";
import type { Response } from "express";

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
  }

  public initialize(): void {
    this.client.once(Events.ClientReady, readyClient => {
      console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    });
    this.client.login(this.token);
  }

  public handleStreamMessage(res: Response): void {
    const disordMessageHandler = new DiscordMessage(res);
    this.client.on("messageCreate", (message: Message) => {
      disordMessageHandler.handleStream(message);
    });
  }
}
