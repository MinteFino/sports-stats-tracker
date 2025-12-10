## Setup and Installations

## Prerequisites
- Node.js (v14 or higher)
- npm

## Installation
1. Install dependencies:
```bash
npm Install

2. Create a `.env` file in the backend directory

3. In the backend directory you can run:

npm run dev

- Runs the app in the development mode. Server will run on http://localhost:5000

This will show you how to install and set up node.js: https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0




backend/
|--- src/
| |-- config/
| | |-- db.js # Database connection
| |-- models/
| | |-- index.js # Model associations
| | |-- player.js #Player data model
| | |-- team.js #Team data model
| | |-- injury.js #Injury reports model
| | |-- match.js #Match/game data model
| |-- services/
| | |-- playerService.js #Player data operations
| | |-- teamService.js #Team data operations
| | |-- injuryService.js #Injury data operations
| | |-- matchService.js #Match data operations
| |-- controllers/
| | |-- playerController.js #Player endpoint handlers
| | |-- teamController.js #Team endpoint handlers
| | |-- injuryController.js #Injury endpoint handlers
| | |-- matchController.js #Match endpoint handlers
| |-- routes/
| | |-- playerRoutes.js #Player endpoints
| | |-- teamRoutes.js #Team endpoints
| | |-- injuryRoutes.js #Injury endpoints
| | |-- matchRoutes.js #Match endpoints
| |-- server.js #Main application entry point
|-- .env #Environment variables
|-- package.json #Dependencies and scripts
|-- package-lock.json #Lockfile for dependencies
|-- README.md #Backend README