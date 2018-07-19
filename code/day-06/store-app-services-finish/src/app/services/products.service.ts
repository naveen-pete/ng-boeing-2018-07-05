import { Injectable, EventEmitter } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productCreated = new EventEmitter<Product>();

  private products: Product[] = [
    {
      id: 1,
      name: 'Boeing 737',
      description: 'Single aisle aircraft',
      price: 77000000,
      isAvailable: true
    },
    {
      id: 2,
      name: 'Boeing 787',
      description: 'Most fuel efficient aircraft',
      price: 231000000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Boeing 777-9',
      description: 'Split wing aircraft',
      price: 42500000,
      isAvailable: true
    }
  ];

  getProducts() {
    console.log('ProductsService.getProducts() invoked.');
    return this.products;
  }

  addProduct(newProduct: Product) {
    console.log('ProductsService.addProduct() invoked.');
    this.products.unshift(newProduct);
    this.productCreated.emit(newProduct);
  }
}
