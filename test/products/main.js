import { assert } from "chai";
import { describe, it } from "mocha";

import { Product } from "../../src/models/product.js";
import { ProductService } from "../../src/services/productService.js";

describe("Test's suite for module Product (model & service)", () => {
  let product,
    productFullCoverage,
    productMegaCoverage,
    productSpecialFullCoverage,
    productSuperSale;
  let productService;

  before("Create a Product object", () => {
    product = new Product("New Product", 10, 35);
    productFullCoverage = new Product("Full Coverage", 10, 20);
    productMegaCoverage = new Product("Mega Coverage", 10, 80);
    productSpecialFullCoverage = new Product("Special Full Coverage", 30, 20);
    productSuperSale = new Product("Super Sale", 20, 20);
    productService = new ProductService();
  });

  describe("Test method print() of model Product", () => {
    it("should return a string", () => {
      assert.typeOf(Product.print(product), "string");
    });
  });

  describe("Test method addProducts() of ProductService", () => {
    it("should return true if the product name has been added to the catalog.", () => {
      assert.equal(ProductService.addProducts("Product"), true);
    });

    it("should return false if the product name has not been added to the catalog.", () => {
      assert.equal(ProductService.addProducts("Full Coverage"), false);
    });
  });

  describe("Test method getProductsCatalog() of ProductService", () => {
    it("should return the catalog", () => {
      assert.equal(
        ProductService.getCatalog().length,
        [
          "Full Coverage",
          "Mega Coverage",
          "Special Full Coverage",
          "Super Sale",
          "Product",
        ].length
      );
    });
  });

  describe("Test method updatePrice() of ProductService", () => {
    it("should return a correct response for Normal Coverage");
    it("should return a correct response for Full Coverage");
    it("should return a correct response for Special Full Coverage");
    it("should return a correct response for Mega Coverage");
    it("should return a correct response for Super Sale");
  });
});
