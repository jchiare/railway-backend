import { createCategory } from "../llm/openai";
import type { Message } from "discord.js";
import type { Response } from "express";

export class DiscordMessage {
  constructor(private res: Response) {
    this.res = res;
  }

  public async handleStream(message: Message): Promise<void> {
    const clientId = Date.now().toString();

    // don't send messages with no content
    if (!message.content) return;

    const category = await createCategory(message.content);

    const data = JSON.stringify({
      content: message.content,
      author: message.author.username,
      userAvatar: message.author.avatarURL(),
      createdAt: message.createdAt,
      linkToMessage: `https://discord.com/channels/${message.guild?.id}/${message.channel.id}/${message.id}`,
      inThread: message?.position != null && message?.position >= 0,
      category
    });

    this.res.write("event: message\n");
    this.res.write(`data: ${data}\n`);
    this.res.write(`id: ${clientId}\n\n`);
  }
}
