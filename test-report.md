# TOC
   - [Test's suite for the core carInsuranceApp](#tests-suite-for-the-core-carinsuranceapp)
     - [Test function execute() of carInsuranceApp class](#tests-suite-for-the-core-carinsuranceapp-test-function-execute-of-carinsuranceapp-class)
   - [Test's suite for module Insurance (services)](#tests-suite-for-module-insurance-services)
     - [Test method updatePrice() of InsuranceService](#tests-suite-for-module-insurance-services-test-method-updateprice-of-insuranceservice)
   - [Test's suite for module Printer (service)](#tests-suite-for-module-printer-service)
     - [Test function printer() of printer service](#tests-suite-for-module-printer-service-test-function-printer-of-printer-service)
   - [Test's suite for module Product (model & service)](#tests-suite-for-module-product-model-service)
     - [Test method print() of model Product](#tests-suite-for-module-product-model-service-test-method-print-of-model-product)
     - [Test method addProducts() of ProductService](#tests-suite-for-module-product-model-service-test-method-addproducts-of-productservice)
     - [Test method getProductsCatalog() of ProductService](#tests-suite-for-module-product-model-service-test-method-getproductscatalog-of-productservice)
     - [Test method updatePrice() of ProductService](#tests-suite-for-module-product-model-service-test-method-updateprice-of-productservice)
     - [Test method updateNormalPrice() of ProductService](#tests-suite-for-module-product-model-service-test-method-updatenormalprice-of-productservice)
     - [Test method updateFullCoveragePrice() of ProductService](#tests-suite-for-module-product-model-service-test-method-updatefullcoverageprice-of-productservice)
     - [Test method updateSpecialFullCoveragePrice() of ProductService](#tests-suite-for-module-product-model-service-test-method-updatespecialfullcoverageprice-of-productservice)
     - [Test method updateSuperSalePrice() of ProductService](#tests-suite-for-module-product-model-service-test-method-updatesupersaleprice-of-productservice)
<a name=""></a>
 
<a name="tests-suite-for-the-core-carinsuranceapp"></a>
# Test's suite for the core carInsuranceApp
<a name="tests-suite-for-the-core-carinsuranceapp-test-function-execute-of-carinsuranceapp-class"></a>
## Test function execute() of carInsuranceApp class
should return true if everything is ok.

```js
assert.isTrue(CarInsuranceApp.execute());
```

<a name="tests-suite-for-module-insurance-services"></a>
# Test's suite for module Insurance (services)
<a name="tests-suite-for-module-insurance-services-test-method-updateprice-of-insuranceservice"></a>
## Test method updatePrice() of InsuranceService
should return a list of updated products.

```js
assert.typeOf(insuranceService.updatePrice()[0], "object");
```

<a name="tests-suite-for-module-printer-service"></a>
# Test's suite for module Printer (service)
<a name="tests-suite-for-module-printer-service-test-function-printer-of-printer-service"></a>
## Test function printer() of printer service
should return true if the file products_after_2_days.txt was written successullfy.

```js
assert.equal(printerService.printPriceUpdate("2"), true);
```

<a name="tests-suite-for-module-product-model-service"></a>
# Test's suite for module Product (model & service)
<a name="tests-suite-for-module-product-model-service-test-method-print-of-model-product"></a>
## Test method print() of model Product
should return a string.

```js
assert.typeOf(Product.print(product), "string");
```

<a name="tests-suite-for-module-product-model-service-test-method-addproducts-of-productservice"></a>
## Test method addProducts() of ProductService
should return true if the product name has been added to the catalog..

```js
assert.equal(ProductService.addProducts("Product"), true);
```

should return false if the product name has not been added to the catalog..

```js
assert.equal(ProductService.addProducts("Full Coverage"), false);
```

<a name="tests-suite-for-module-product-model-service-test-method-getproductscatalog-of-productservice"></a>
## Test method getProductsCatalog() of ProductService
should return the catalog.

```js
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
```

<a name="tests-suite-for-module-product-model-service-test-method-updateprice-of-productservice"></a>
## Test method updatePrice() of ProductService
should return a correct updated price and sellIn for Normal Coverage.

```js
assert.deepEqual(
  Product.print(productService.updatePrice(product)),
  Product.print(new Product("New Product", 9, 34))
);
```

should return a correct updated price and sellIn for Full Coverage.

```js
assert.deepEqual(
  Product.print(productService.updatePrice(productFullCoverage)),
  Product.print(new Product("Full Coverage", 9, 21))
);
```

should return a correct updated price and sellIn for Special Full Coverage.

```js
assert.deepEqual(
  Product.print(productService.updatePrice(productSpecialFullCoverage)),
  Product.print(new Product("Special Full Coverage", 7, 22))
);
```

should return a correct updated price and sellIn for Mega Coverage.

```js
assert.deepEqual(
  Product.print(productService.updatePrice(productMegaCoverage)),
  Product.print(new Product("Mega Coverage", 10, 80))
);
```

should return a correct updated price and sellIn for Super Sale.

```js
assert.deepEqual(
  Product.print(productService.updatePrice(productSuperSale)),
  Product.print(new Product("Super Sale", 19, 18))
);
```

<a name="tests-suite-for-module-product-model-service-test-method-updatenormalprice-of-productservice"></a>
## Test method updateNormalPrice() of ProductService
should return a correct sellIn and price for sellIn >= 0 on Normal Product.

```js
assert.deepEqual(
  Product.print(
    productService.updateNormalPrice(productTestOneNormalPrice)
  ),
  Product.print(new Product("Normal", 20, 19))
);
```

should return a correct sellIn and price for sellIn < 0 on Normal Product.

```js
assert.deepEqual(
  Product.print(
    productService.updateNormalPrice(productTestTwoNormalPrice)
  ),
  Product.print(new Product("Normal", -1, 18))
);
```

<a name="tests-suite-for-module-product-model-service-test-method-updatefullcoverageprice-of-productservice"></a>
## Test method updateFullCoveragePrice() of ProductService
should return a correct updated price and sellIn for sellIn >= 0 on Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateFullCoveragePrice(productTestOneFullCoverage)
  ),
  Product.print(new Product("Full Coverage", 20, 21))
);
```

should return a correct updated price and sellIn for sellIn < 0 on Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateFullCoveragePrice(productTestTwoFullCoverage)
  ),
  Product.print(new Product("Full Coverage", -1, 22))
);
```

<a name="tests-suite-for-module-product-model-service-test-method-updatespecialfullcoverageprice-of-productservice"></a>
## Test method updateSpecialFullCoveragePrice() of ProductService
should return a correct updated price and sellIn for sellIn > 10 on Special Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateSpecialFullCoveragePrice(
      productTestOneSpecialFullCoverage
    )
  ),
  Product.print(new Product("Special Full Coverage", 20, 31))
);
```

should return a correct updated price and sellIn for sellIn between 10 and 5 (10 included) on Special Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateSpecialFullCoveragePrice(
      productTestTwoSpecialFullCoverage
    )
  ),
  Product.print(new Product("Special Full Coverage", 7, 32))
);
```

should return a correct updated price and sellIn for sellIn between 5 and 0 (5 included) on Special Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateSpecialFullCoveragePrice(
      productTestThreeSpecialFullCoverage
    )
  ),
  Product.print(new Product("Special Full Coverage", 4, 33))
);
```

should return a correct updated price and sellIn for sellIn < 0 on Special Full Coverage.

```js
assert.deepEqual(
  Product.print(
    productService.updateSpecialFullCoveragePrice(
      productTestFourSpecialFullCoverage
    )
  ),
  Product.print(new Product("Special Full Coverage", -1, 0))
);
```

<a name="tests-suite-for-module-product-model-service-test-method-updatesupersaleprice-of-productservice"></a>
## Test method updateSuperSalePrice() of ProductService
should return a correct sellIn and price for sellIn >= 0 on Super Sale.

```js
assert.deepEqual(
  Product.print(
    productService.updateSuperSalePrice(productTestOneSuperSale)
  ),
  Product.print(new Product("Super Sale", 20, 18))
);
```

should return a correct sellIn and price for sellIn < 0 on Super Sale.

```js
assert.deepEqual(
  Product.print(
    productService.updateSuperSalePrice(productTestTwoSuperSale)
  ),
  Product.print(new Product("Super Sale", -1, 16))
);
```

