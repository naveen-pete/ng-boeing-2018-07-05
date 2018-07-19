import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  today = Date.now();
  searchText = '';

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    this.products = [];
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  // onProductCreated(newProduct: Product) {
  //   this.products.unshift(newProduct);

  //   this.loggerService.log('Product added to the array.');
  // }
}
