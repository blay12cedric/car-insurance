import * as fs from "fs";

/**
 *
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
  printPriceUpdate = async (nbreDays) => {
    fs.writeFile(`products_after_${nbreDays}_days.txt`, this.#input, (e) => {
      if (e) throw Error(`An error occured during file writing`);
      console.log(`File writing completed successfully!`);
      return true;
    });
  };
}

export { PrinterService };
