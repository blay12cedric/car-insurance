/**
 *
 *
 * Class `InsuranceService` that represents services provided by the car insurance for some poducts
 */
class InsuranceService {
  #productService;
  #products;
  #dayCounter;

  constructor(productService, products) {
    this.#productService = productService;
    this.#products = products;
    this.#dayCounter = 0;
  }
  /**
   * Function used to update price & sellIn after day passed
   * for a fixed number of days
   * @param number, list [] of Product
   * @returns string
   */
  updatePrice = () => {
    const counter = this.#dayCounter;
    this.#dayCounter++;

    if (counter != 0)
      for (const product of this.#products) {
        this.#productService.updatePrice(product);
      }
    return this.#products;
  };
}

export { InsuranceService };
