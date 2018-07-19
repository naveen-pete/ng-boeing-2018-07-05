import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  today = Date.now();
  searchText: string = '';

  products: Product[] = [
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

  constructor() {}

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
    console.log('productCreated event handler invoked');
  }
}
