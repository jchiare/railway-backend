import { OpenAI } from "openai";

// Need to iterate on prompt
const CATEGORY_PROMPT = `You will receive a message about the Railway APP from a chat service. 
Determine the category of the message from the following: pricing, billing, deployment, feedback, other.
Respond back only with the category`;

// Can improve this a lot but for sake of simplicity
// I'm coupling this service to one specific use case
export async function createCategory(content: string): Promise<string | null> {
  const openai = new OpenAI();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: CATEGORY_PROMPT
      },
      { role: "user", content }
    ],
    model: "gpt-3.5-turbo" // use cheapest model for demo
  });

  return response.choices[0].message.content;
}
