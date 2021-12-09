import { assert } from "chai";
import { before, describe, it } from "mocha";
import { Product } from "../../src/models/index.js";
import { InsuranceService, ProductService } from "../../src/services/index.js";

describe("Test's suite for module Insurance (services)", () => {
  let products, productService, insuranceService;

  before("Create Products, ProductService and InsuranceService", () => {
    products = [new Product("New Product", 20, 20)];
    productService = new ProductService();
    insuranceService = new InsuranceService(productService, products);
  });

  describe("Test method updatePrice() of InsuranceService", () => {
    it("should return a list of updated products", () => {
      assert.typeOf(insuranceService.updatePrice()[0], "object");
    });
  });
});
