# Railway Backend

Backend that powers the frontend to analyze messages

## Features

- Real-time streaming of messages using Server-Sent Events (SSE).
- Integration with Discord to receive and process messages.
- Uses LLM to determine category of message

## TODO

- [ ] Database to store messages
- [ ] Tests?
- [ ] More data sources (Slack?)

### Prerequisites

- Have NodeJS installed
- Create a `.env` file with your discord token
- Install dependencies `npm i`
- Transpile Typescript to Javascript `npm build`

### Usage

- Run in production using `npm run start` after building
- Run in dev using `npm run dev`
