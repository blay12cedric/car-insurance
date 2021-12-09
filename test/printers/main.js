import { assert } from "chai";
import { before, describe, it } from "mocha";
import { PrinterService } from "../../src/services/index.js";

describe("Test's suite for module Printer (service)", () => {
  let input, printerService;
  before("Create the input and a PrinterService()", () => {
    input = "Hello Car Insurance";
    printerService = new PrinterService(input);
  });

  describe("Test function printer() of printer service", () => {
    it("should return true if the file products_after_2_days.txt was written successullfy", () => {
      assert.equal(printerService.printPriceUpdate("2"), true);
    });
  });
});
