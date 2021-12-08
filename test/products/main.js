import { assert } from "chai";
import { describe, it } from "mocha";

import { Product } from "../../src/models/product.js";

describe("Test's suite for module Product (model & service)", () => {
  let product;
  before("Create a Product object", () => {
    product = new Product("New Product", 10, 35);
  });

  describe("Test method print", () => {
    it("should return a string", () => {
      assert.typeOf(Product.print(product), "string");
    });
  });
});
