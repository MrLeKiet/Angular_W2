import { Injectable } from '@angular/core';
import { producerUpdateValueVersion } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    { id: 1, name: 'Product 1', description: 'A', price: 300 },
    { id: 2, name: 'Product 2', description: 'B', price: 300 },
    { id: 3, name: 'Product 3', description: 'C', price: 300 },
    { id: 4, name: 'Product 4', description: 'D', price: 300 },
  ];

  getProducts() {
    return this.products;
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  getProductById(id: number | string) {
    if (typeof id == 'string') {
      id = parseInt(id);
    }

    const product = this.products.find((product) => product.id == id);
    return product || {};
  }
}
