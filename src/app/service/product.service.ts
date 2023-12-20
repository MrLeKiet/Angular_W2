import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
  ];

  getProducts() {
    return this.products;
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
