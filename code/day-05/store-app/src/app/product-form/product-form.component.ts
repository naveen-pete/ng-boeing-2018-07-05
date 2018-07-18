import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    // solution #1
    // const obj = this;
    // setTimeout(function() {
    //   console.log('this:', obj);
    //   obj.showMessage = false;
    //   console.log(
    //     'setTimeout() callback executed. showMessage reset to false.'
    //   );
    // }, 3000);

    // solution #2
    // setTimeout(() => {
    //   console.log('this:', this);
    //   this.showMessage = false;
    //   console.log(
    //     'setTimeout() callback executed. showMessage reset to false.'
    //   );
    // }, 3000);

    // solution #3
    setTimeout(
      function() {
        console.log('this:', this);
        this.showMessage = false;
        console.log(
          'setTimeout() callback executed. showMessage reset to false.'
        );
      }.bind(this),
      3000
    );
  }
}
