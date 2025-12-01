import { readConfig, setUser } from "./config.js";

function main() {
  setUser("Balint");
  const cfg = readConfig();
  console.log(cfg);
}

main();
