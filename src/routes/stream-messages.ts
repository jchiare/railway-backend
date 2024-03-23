import { Router } from "express";
import { discordBot } from "../services/discord";
import type { Request, Response } from "express";

const streamMessagesRouter = Router();

streamMessagesRouter.get("/stream-messages", (req: Request, res: Response) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache"
  });

  discordBot.handleStreamMessage(res);

  req.on("close", () => res.end("OK"));
});

export { streamMessagesRouter };
