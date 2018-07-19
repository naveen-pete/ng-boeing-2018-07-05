import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {
  @Output('created') productCreated = new EventEmitter<Product>();
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    isAvailable: false
  };
  showMessage = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Product information submitted.');
    console.log(this.product);
    // this.products.unshift(this.product);
    this.productCreated.emit(this.product);

    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      isAvailable: false
    };

    this.showMessage = true;

    // Solution #1
    // const obj = this;

    // setTimeout(function() {
    //   obj.showMessage = false;

    //   console.log('showMessage flag is set to false');
    //   console.log('this:', this);
    // }, 3000);

    setTimeout(() => {
      this.showMessage = false;

      console.log('showMessage flag is set to false');
      console.log('this:', this);
    }, 3000);
  }
}
