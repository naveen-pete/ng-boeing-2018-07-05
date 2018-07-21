import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    // const myReqHeaders = new HttpHeaders().set('my-auth', 'abcd123');
    // const myReqParams = new HttpParams()
    //   .append('city', 'blore')
    //   .append('name', 'hari');

    return this.httpClient.get<Product[]>(this.apiUrl).pipe(
      map(products => {
        const newProducts = products.map(product => {
          return { ...product, name: product.name.toUpperCase() };
        });
        return newProducts;
      }),
      catchError(error => {
        console.log('catch operator:', error);
        return throwError(
          new Error('Some error occurred, contact suppor team.')
        );
      })
      // one more operator,
      // third operator
    );
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
