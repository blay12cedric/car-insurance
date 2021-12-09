import { assert } from "chai";
import { describe, it } from "mocha";

import { CarInsuranceApp } from "../../src/core/app.js";

describe("Test's suite for the core carInsuranceApp", () => {
  describe("Test function execute() of carInsuranceApp class", () => {
    it("should return true if everything is ok", () => {
      assert.isTrue(CarInsuranceApp.execute());
    });
  });
});
