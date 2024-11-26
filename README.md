### LUKSO Block API TypeScript
This project is a TypeScript-based API application built with Next.js that provides endpoints for interacting with the LUKSO Testnet. It includes the following functionality:

- Fetching the latest block number from the LUKSO Testnet.
- Health check endpoint to ensure the API is operational.
- Swagger documentation for easy interaction and testing of the API.
---
### Features
- Block Number Endpoint: Retrieve the current block number from the LUKSO Testnet.
- Health Check Endpoint: Check the status of the API.
- Swagger Integration: Interactive API documentation available at /docs.
---
### Technologies Used
- Next.js: React-based framework for server-side rendering and API routes.
- TypeScript: For static type checking and better code reliability.
- Swagger UI: For interactive API documentation.
- node-fetch: To interact with the LUKSO Testnet RPC.
---
### Setup and Installation
**Prerequisites**
- Node.js >= 18
- npm >= 7
*Clone the Repository*
```bash
git clone git@github.com:AdrianJemiolo/lukso-block-api-ts.git
cd lukso-block-api-ts
```
*Install Dependencies*
```bash
npm install
```
---
### Usage
*To start the development server:*
```bash
npm run dev
```
**Visit the application at `http://localhost:3000.`**

Swagger Documentation
The Swagger documentation can be accessed at `http://localhost:3000/docs`.

### Docker Support
Build a Docker Image
To build a Docker image for the project:
```bash
docker build -t lukso-block-api-ts .
```
Run the Docker Container
To run the application in a Docker container:

```bash
docker run -p 3000:3000 lukso-block-api-ts
```
---
### License
This project is licensed under the MIT License.




