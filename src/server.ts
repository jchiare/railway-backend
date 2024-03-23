import "dotenv/config";
import express from "express";
import { streamMessagesRouter } from "./routes/stream-messages";
import { discordBot } from "./services/discord";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(streamMessagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  // Might make sense to give discordBot it's own server, fine for now
  discordBot.initialize();
  console.log(`Server running on port ${PORT}`);
});
