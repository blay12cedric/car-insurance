import {
  ProductService,
  InsuranceService,
  PrinterService,
} from "../services/index.js";
import { Product } from "../models/index.js";

/**
 *
 * Class CarInsuranceApp that represents the Car Insurance App
 *
 */
class CarInsuranceApp {
  /**
   * Function that represents the execution of the car insurance app
   *
   * @params void
   * @returns void
   */
  static execute = () => {
    //Set a list of products
    let products = [
      new Product("Medium Coverage", 10, 20), //Normal Product
      new Product(ProductService.getCatalog()[0], 2, 0), //Full Coverage index 0 on the catalog
      new Product("Low Coverage", 5, 7), //Normal Product
      new Product(ProductService.getCatalog()[1], 0, 80), //Mega Coverage index 1 on the catalog
      new Product(ProductService.getCatalog()[1], -1, 80), //Mega Coverage index 1 on the catalog
      new Product(ProductService.getCatalog()[2], 15, 20), //Special Full Coverage index 2 on the catalog
      new Product(ProductService.getCatalog()[2], 10, 49), //Special Full Coverage index 2 on the catalog
      new Product(ProductService.getCatalog()[2], 5, 49), //Special Full Coverage index 2 on the catalog
      new Product(ProductService.getCatalog()[3], 3, 6), //Super Sale index 3 on the catalog
    ];

    //creation and instanciation of different services used (product, insurance)
    const productService = new ProductService();
    const insuranceService = new InsuranceService(productService, products);
    const days = 30;
    let textInput = ``;

    //Iterate each day and update the price
    for (let i = 0; i <= days; i++) {
      textInput += `-------- day ${i} --------\nName, SellIn, Price\n`;

      for (const product of insuranceService.updatePrice())
        textInput += `\n` + Product.print(product);
      textInput += `\n\n`;
    }

    //Print the final result inside the file
    const printerService = new PrinterService(textInput);
    printerService.printPriceUpdate(30);

    return true;
  };
}

export { CarInsuranceApp };
