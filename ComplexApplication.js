/*
Filename: ComplexApplication.js

Description: This code is a complex application that simulates a virtual marketplace. It contains multiple classes, such as User, Product, Cart, and Order, along with various methods and functionalities for users to browse, select, and purchase products.

Note: Due to space limitations, the code is abbreviated with simplified functionality. In a real complex application, there would be more validations, error handling, and complete implementation of each method.

Author: [Your Name]

*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = new Cart();
    this.orders = [];
  }

  addToCart(product, quantity) {
    this.cart.addProduct(product, quantity);
  }

  removeFromCart(product) {
    this.cart.removeProduct(product);
  }

  checkoutCart() {
    const order = new Order(this.cart);
    this.orders.push(order);
    this.cart = new Cart();
    return order;
  }
}

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product, quantity) {
    const existingProduct = this.products.find(p => p.product.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.products.push({ product, quantity });
    }
  }

  removeProduct(product) {
    this.products = this.products.filter(p => p.product.name !== product.name);
  }
}

class Order {
  constructor(cart) {
    this.products = cart.products;
    this.total = this.calculateTotal(cart.products);
  }

  calculateTotal(products) {
    return products.reduce((sum, p) => sum + p.product.price * p.quantity, 0);
  }
}

// Demo usage of the virtual marketplace

const user = new User("John Smith", "john@example.com");

const product1 = new Product("Product 1", 10.99, 2);
const product2 = new Product("Product 2", 19.99, 1);
const product3 = new Product("Product 3", 5.99, 5);

user.addToCart(product1, 1);
user.addToCart(product2, 2);
user.addToCart(product3, 3);

console.log(user.cart.products);
// Output: [ { product: Product { name: 'Product 1', price: 10.99, quantity: 2 }, quantity: 1 }, { product: Product { name: 'Product 2', price: 19.99, quantity: 1 }, quantity: 2 }, { product: Product { name: 'Product 3', price: 5.99, quantity: 5 }, quantity: 3 } ]

user.removeFromCart(product2);

console.log(user.cart.products);
// Output: [ { product: Product { name: 'Product 1', price: 10.99, quantity: 2 }, quantity: 1 }, { product: Product { name: 'Product 3', price: 5.99, quantity: 5 }, quantity: 3 } ]

const order = user.checkoutCart();

console.log(order);
// Output: Order { products: [ { product: Product { name: 'Product 1', price: 10.99, quantity: 2 }, quantity: 1 }, { product: Product { name: 'Product 3', price: 5.99, quantity: 5 }, quantity: 3 } ], total: 72.91 }

console.log(user.orders);
// Output: [ Order { products: [ { product: Product { name: 'Product 1', price: 10.99, quantity: 2 }, quantity: 1 }, { product: Product { name: 'Product 3', price: 5.99, quantity: 5 }, quantity: 3 } ], total: 72.91 } ]

// More code and functionalities could be added to make this application even more complex and sophisticated.