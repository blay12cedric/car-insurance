class ProductService {
  /* Catalogs of existing product names and new ones */
  static #productsCatalog = [
    "Full Coverage",
    "Mega Coverage",
    "Special Full Coverage",
    "Super Sale",
  ];

  /**
   * Add new product names to the catalog
   * @param list of new product names []
   * @returns void
   */
  static addProducts = (...products) => {
    const index = this.#productsCatalog.length;
    for (const product of products)
      if (this.#productsCatalog.indexOf(product) == -1)
        this.#productsCatalog.push(product);
    return index < this.#productsCatalog.length ? true : false;
  };

  /**
   * Get the product names saved on the catalog
   * @param void
   * @returns string[]
   */
  static getCatalog = () => this.#productsCatalog;

  /**
   * Update products details after a day passed
   * @param Product[]
   * @returns void
   */
  updatePrice = (product) => {
    //Reduce the number of day left
    product.setSellIn(product.getSellIn() - 1);

    //Check if the price can be updated based on test rules
    if (
      (product.getPrice() == 0 && product.getName() != "Full Coverage") ||
      product.getPrice() == 80 ||
      (product.getPrice() == 50 && product.getName() == "Full Coverage")
    )
      return product;
    else {
      switch (product.getName()) {
        case "Full Coverage":
          this.#updateFullCoveragePrice(product);
          break;
        case "Special Full Coverage":
          this.#updateSpecialFullCoveragePrice(product);
          break;
        case "Super Sale":
          this.#updateSuperSalePrice(product);
          break;
        default:
          this.#updateNormalPrice(product);
      }

      //Adjust prices after computation to avoid negative and value higher than 50
      if (product.getPrice() < 0) product.setPrice(0);
      if (product.getPrice() > 50) product.setPrice(50);
    }

    return product;
  };

  /**
   * Update price for normal product
   * @param Product
   * @returns void
   */
  #updateNormalPrice = (product) => {
    if (product.getSellIn() >= 0) product.setPrice(product.getPrice() - 1);
    else product.setPrice(product.getPrice() - 2);
  };

  /**
   * Update price for Full Coverage product
   * @param Product
   * @returns void
   */
  #updateFullCoveragePrice = (product) => {
    if (product.getSellIn() >= 0) product.setPrice(product.getPrice() + 1);
    else product.setPrice(product.getPrice() + 2);
  };

  /**
   * Update price for Special Full Coverage product
   * @param Product
   * @returns void
   */
  #updateSpecialFullCoveragePrice = (product) => {
    //Check the sellIn and apply update prices based on rules
    if (product.getSellIn() > 10) product.setPrice(product.getPrice() + 1);
    else if (product.getSellIn() <= 10 && product.getSellIn() > 5)
      product.setPrice(product.getPrice() + 2);
    else if (product.getSellIn() <= 5 && product.getSellIn() > 0)
      product.setPrice(product.getPrice() + 3);
    else product.setPrice(0);
  };

  /**
   * Update price for Super Sale product
   * @param Product
   * @returns void
   */
  #updateSuperSalePrice = (product) => {
    if (product.getSellIn() >= 0) product.setPrice(product.getPrice() - 2);
    else product.setPrice(product.getPrice() - 4);
  };
}

export { ProductService };
