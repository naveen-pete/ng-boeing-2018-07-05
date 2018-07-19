import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('productData')
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    isAvailable: false
  };

  constructor() {}

  ngOnInit() {}
}
