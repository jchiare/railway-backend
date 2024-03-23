import { Router } from "express";
import { discordBot, DiscordMessage } from "../services/discord";
import type { Request, Response } from "express";

const discordRouter = Router();

discordRouter.get("/stream-messages", (req: Request, res: Response) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache"
  });

  discordBot.handleStreamMessage(new DiscordMessage(res));
  req.on("close", () => res.end("OK"));
});

export { discordRouter };
