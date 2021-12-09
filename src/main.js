import { CarInsuranceApp } from "./core/index.js";

//Entry point of the program
async function main() {
  CarInsuranceApp.execute();
}

main().catch((e) => {
  if (e) console.log(e);
  process.exit(1);
});
