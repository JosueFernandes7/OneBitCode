class product {
  constructor(name,description,price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(discountPercent) {
    return this.price * (1 - discountPercent/100);
  }
}
let banana = new product("Banana","é uma fruta doce",80)
banana.addToStock(89);

console.log(banana.calculateDiscount(15));