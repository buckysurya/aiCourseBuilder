import { ensureDatabaseSchema } from "../configs/initDb";

async function run() {
  await ensureDatabaseSchema();
}

run();
