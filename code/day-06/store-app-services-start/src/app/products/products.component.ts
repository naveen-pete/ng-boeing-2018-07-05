import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  today = Date.now();
  searchText = '';

  constructor() {
    this.products = [
      {
        id: 1,
        name: '4S Engine',
        description: 'Used in ships & gen sets',
        price: 250000,
        isAvailable: true
      },
      {
        id: 2,
        name: '2S Engine',
        description: 'Used in cargo ships',
        price: 350000,
        isAvailable: false
      },
      {
        id: 3,
        name: 'Power Plant',
        description: 'Create models of power plants',
        price: 1000000,
        isAvailable: true
      }
    ];
  }

  ngOnInit() {}

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
  }
}
