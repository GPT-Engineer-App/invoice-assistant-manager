# invoice-assistant-manager

Invoice Manager is a web app and an OpenAI powered assistant utilizing its Assistants API. It integrates with user's gmail, google drive, and slack. Via chat interface the user can chat with assistant. Assistant is configured in such a way that he first tries to understand user's current invoice management process and then suggests how he can help and proposes authorisation links to apropriate integrations (gmail, google drive, slack). The assistant has access to three functions defined in the backend: get_mailbox_overview, get_email_details, and save_attachments.

The product website should have a hero section describing Invoice Manager's capabilities and benefits and a call-to-action button to chat with him, where he will understand user invoice management process, explain how he can improve his workflow, and guide the user through registration and authorisation of necessary apps. Then, there should be also a pricing page with three options based on pay-per-usage measured in number of tokens used and reports prepared with a card payment adding process to follow. There should be a free trial of providing one report after which the assistant will ask the user to choose a billing plan. The plans should be 10/9/8 USD per 2/5/10 reports (this is dummy data for now). The styling of the frontend should be modern, using orange, white, and black as the main colors, and have a vibe and communication matching the small businesses vibe since they are the target customer.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/invoice-assistant-manager.git
cd invoice-assistant-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
