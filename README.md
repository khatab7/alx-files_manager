necessary instructions for setting up and using the project.

# ALX Files Manager

This repository contains a set of utilities and API endpoints designed to manage a file system with a backend service using Redis and MongoDB. It includes the implementation of utilities for connecting to Redis and MongoDB, along with API endpoints for managing users and authenticating them.

## Setup and Installation

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alx-files_manager.git
   cd alx-files_manager

    Install dependencies:

npm install

Set up environment variables: Create a .env file in the root directory and define the following environment variables:

DB_HOST=localhost
DB_PORT=27017
DB_DATABASE=files_manager
PORT=5000

Start the application:

npm run start-server

This will start the server on port 5000 (or the value specified in the PORT environment variable).
