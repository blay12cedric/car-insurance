import * as fs from "fs";

/**
 *
 * class that provides services for printing
 */
class PrinterService {
  #input;

  constructor(input) {
    this.#input = input;
  }

  /**
   *
   * function that prints the input inside the named file
   * @param {*} nbreDays
   * @returns boolean
   */
  printPriceUpdate = (nbreDays) => {
    fs.writeFile(`products_after_${nbreDays}_days.txt`, this.#input, (e) => {
      if (e) console.error(e);
    });
    return true;
  };

  /* Getters and setters */
  getInput = () => {
    return this.#input;
  };

  setInput = (input) => {
    this.#input = input;
  };
}

export { PrinterService };
