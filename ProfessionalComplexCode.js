/*
Filename: ProfessionalComplexCode.js

This code is a sophisticated, elaborate, and complex JavaScript program that demonstrates a fictional e-commerce website's shopping cart functionality. It includes various features like adding products to the cart, managing quantities, calculating totals, applying discounts, and generating order summaries.

Author: Your Name
Date: DD/MM/YYYY
*/

// Product class to represent a product with ID, name, price, and quantity
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = 1;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

// ShoppingCart class to manage products in the cart
class ShoppingCart {
  constructor() {
    this.products = [];
    this.discountPercentage = 0;
  }

  addProduct(product) {
    const existingProduct = this.products.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.increaseQuantity();
    } else {
      this.products.push(product);
    }
  }

  removeProduct(productId) {
    this.products = this.products.filter((p) => p.id !== productId);
  }

  setDiscountPercentage(discountPercentage) {
    this.discountPercentage = discountPercentage;
  }

  calculateTotal() {
    let total = 0;

    this.products.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total - (total * this.discountPercentage) / 100;
  }

  generateOrderSummary() {
    let summary = "Order Summary:\n";

    this.products.forEach((product) => {
      summary += `- ${product.name} (${product.quantity}) - $${product.price * product.quantity}\n`;
    });

    summary += `Discount: ${this.discountPercentage}%\n`;
    summary += `Total: $${this.calculateTotal()}`;

    return summary;
  }
}

// Sample usage
const cart = new ShoppingCart();

const product1 = new Product("p1", "Product 1", 10);
const product2 = new Product("p2", "Product 2", 20);
const product3 = new Product("p3", "Product 3", 30);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product3);
cart.addProduct(product3);

console.log(cart.generateOrderSummary());

cart.setDiscountPercentage(10);

console.log(cart.generateOrderSummary());

cart.removeProduct("p2");

console.log(cart.generateOrderSummary());

// And so on... (more code)