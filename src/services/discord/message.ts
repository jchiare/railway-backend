import type { Message } from "discord.js";
import type { Response } from "express";

export class DiscordMessage {
  constructor(private res: Response) {
    this.res = res;
  }

  public handleStream(message: Message): void {
    const clientId = Date.now().toString();
    const data = JSON.stringify({
      content: message.content,
      author: message.author.username
    });

    this.res.write("event: message\n");
    this.res.write(`data: ${data}\n`);
    this.res.write(`id: ${clientId}\n\n`);
  }
}
