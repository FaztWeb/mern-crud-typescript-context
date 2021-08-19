import { ConfigServer } from "./server/server.config";
import { connection } from "./database/config.database";

const server = new ConfigServer();

async function main() {
  try {
    server.start();
    await connection();
    console.log("Server on port", server.port);
  } catch (error) {
    console.error(error);
  }
}

main();
