import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      products => {
        console.log('Get products successful.');
        this.products = products;
      },
      (error: Error) => {
        console.log('Failed: Get products failed.', error.message);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log('Delete product successful.');
          this.products = this.products.filter(
            product => product.id !== productId
          );
        },
        error => {
          console.log('Failed: Delete product failed.', error);
        }
      );
    }
  }
}
