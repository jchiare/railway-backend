import "dotenv/config";
import express from "express";
import { discordRouter } from "./controllers/discord";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(discordRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
