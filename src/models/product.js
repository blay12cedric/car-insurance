/**
 *
 * Class that represents product
 */
class Product {
  #name;
  #sellIn;
  #price;

  constructor(name, sellIn, price) {
    //Check if product price is negative
    if (price < 0) throw new Error("A product's price can't be negative.");
    //Check if the price is higher than 50
    if (price > 50 && price != 80)
      throw new Error("Prices greater than 50 should always be equal to 80.");
    //Check if price = 80 is Mega Coverage
    if (
      (name == "Mega Coverage" && price != 80) ||
      (price == 80 && name != "Mega Coverage")
    )
      throw Error("Mega Coverage price is always equal to 80.");
    this.#name = name;
    this.#sellIn = sellIn;
    this.#price = price;
  }

  /* Getters and Setters */
  getName = () => this.#name;

  getSellIn = () => this.#sellIn;

  getPrice = () => this.#price;

  setName = (name) => {
    this.#name = name;
  };

  setSellIn = (sellIn) => {
    this.#sellIn = sellIn;
  };

  setPrice = (price) => {
    this.#price = price;
  };

  /* Write product details */
  static print = (product) =>
    `${product.getName()}, ${product.getSellIn()}, ${product.getPrice()}`;
}

export { Product };
