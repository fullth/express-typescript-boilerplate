import App from './app';
require("dotenv").config();

const port = Number(process.env.SERVER_PORT);

const server = async function (): Promise<void> {
  try {
    const app = new App();
    await app.createServer(port);
  } catch (err: Error | any) {
    console.error(err);
  }
}

server();