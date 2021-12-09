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
    productSpecialFullCoverage = new Product("Special Full Coverage", 8, 20);
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
    it("should return a correct updated price and sellIn for Normal Coverage", () => {
      assert.deepEqual(
        Product.print(productService.updatePrice(product)),
        Product.print(new Product("New Product", 9, 34))
      );
    });
    it("should return a correct updated price and sellIn for Full Coverage", () => {
      assert.deepEqual(
        Product.print(productService.updatePrice(productFullCoverage)),
        Product.print(new Product("Full Coverage", 9, 21))
      );
    });
    it("should return a correct updated price and sellIn for Special Full Coverage", () => {
      assert.deepEqual(
        Product.print(productService.updatePrice(productSpecialFullCoverage)),
        Product.print(new Product("Special Full Coverage", 7, 22))
      );
    });
    it("should return a correct updated price and sellIn for Mega Coverage", () => {
      assert.deepEqual(
        Product.print(productService.updatePrice(productMegaCoverage)),
        Product.print(new Product("Mega Coverage", 10, 80))
      );
    });
    it("should return a correct updated price and sellIn for Super Sale", () => {
      assert.deepEqual(
        Product.print(productService.updatePrice(productSuperSale)),
        Product.print(new Product("Super Sale", 19, 18))
      );
    });
  });

  //-----

  describe("Test method updateNormalPrice() of ProductService", () => {
    let productTestOneNormalPrice, productTestTwoNormalPrice;

    before("Create two Product object", () => {
      productTestOneNormalPrice = new Product("Normal", 20, 20);
      productTestTwoNormalPrice = new Product("Normal", -1, 20);
    });

    it("should return a correct sellIn and price for sellIn >= 0 on Normal Product", () => {
      assert.deepEqual(
        Product.print(
          productService.updateNormalPrice(productTestOneNormalPrice)
        ),
        Product.print(new Product("Normal", 20, 19))
      );
    });
    it("should return a correct sellIn and price for sellIn < 0 on Normal Product", () => {
      assert.deepEqual(
        Product.print(
          productService.updateNormalPrice(productTestTwoNormalPrice)
        ),
        Product.print(new Product("Normal", -1, 18))
      );
    });
  });

  describe("Test method updateFullCoveragePrice() of ProductService", () => {
    let productTestOneFullCoverage, productTestTwoFullCoverage;

    before("Create two Product object", () => {
      productTestOneFullCoverage = new Product("Full Coverage", 20, 20);
      productTestTwoFullCoverage = new Product("Full Coverage", -1, 20);
    });

    it("should return a correct updated price and sellIn for sellIn >= 0 on Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateFullCoveragePrice(productTestOneFullCoverage)
        ),
        Product.print(new Product("Full Coverage", 20, 21))
      );
    });
    it("should return a correct updated price and sellIn for sellIn < 0 on Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateFullCoveragePrice(productTestTwoFullCoverage)
        ),
        Product.print(new Product("Full Coverage", -1, 22))
      );
    });
  });

  describe("Test method updateSpecialFullCoveragePrice() of ProductService", () => {
    let productTestOneSpecialFullCoverage,
      productTestTwoSpecialFullCoverage,
      productTestThreeSpecialFullCoverage,
      productTestFourSpecialFullCoverage;

    before("Create four Product object", () => {
      productTestOneSpecialFullCoverage = new Product(
        "Special Full Coverage",
        20,
        30
      );
      productTestTwoSpecialFullCoverage = new Product(
        "Special Full Coverage",
        7,
        30
      );
      productTestThreeSpecialFullCoverage = new Product(
        "Special Full Coverage",
        4,
        30
      );
      productTestFourSpecialFullCoverage = new Product(
        "Special Full Coverage",
        -1,
        30
      );
    });

    it("should return a correct updated price and sellIn for sellIn > 10 on Special Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSpecialFullCoveragePrice(
            productTestOneSpecialFullCoverage
          )
        ),
        Product.print(new Product("Special Full Coverage", 20, 31))
      );
    });
    it("should return a correct updated price and sellIn for sellIn between 10 and 5 (10 included) on Special Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSpecialFullCoveragePrice(
            productTestTwoSpecialFullCoverage
          )
        ),
        Product.print(new Product("Special Full Coverage", 7, 32))
      );
    });
    it("should return a correct updated price and sellIn for sellIn between 5 and 0 (5 included) on Special Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSpecialFullCoveragePrice(
            productTestThreeSpecialFullCoverage
          )
        ),
        Product.print(new Product("Special Full Coverage", 4, 33))
      );
    });
    it("should return a correct updated price and sellIn for sellIn < 0 on Special Full Coverage", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSpecialFullCoveragePrice(
            productTestFourSpecialFullCoverage
          )
        ),
        Product.print(new Product("Special Full Coverage", -1, 0))
      );
    });
  });

  describe("Test method updateSuperSalePrice() of ProductService", () => {
    let productTestOneSuperSale, productTestTwoSuperSale;

    before("Create two Product object", () => {
      productTestOneSuperSale = new Product("Super Sale", 20, 20);
      productTestTwoSuperSale = new Product("Super Sale", -1, 20);
    });

    it("should return a correct sellIn and price for sellIn >= 0 on Super Sale", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSuperSalePrice(productTestOneSuperSale)
        ),
        Product.print(new Product("Super Sale", 20, 18))
      );
    });
    it("should return a correct sellIn and price for sellIn < 0 on Super Sale", () => {
      assert.deepEqual(
        Product.print(
          productService.updateSuperSalePrice(productTestTwoSuperSale)
        ),
        Product.print(new Product("Super Sale", -1, 16))
      );
    });
  });
});
