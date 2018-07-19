import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('productData')
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    isAvailable: false
  };

  subscription: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.subscription = this.productsService.productCreated.subscribe(
      (product: Product) => {
        console.log('New Product object received:', product);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
