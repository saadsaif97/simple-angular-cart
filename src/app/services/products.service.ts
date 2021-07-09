import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  async getProducts() {
    try {
      let products = await this.http.get(this.baseUrl).toPromise();
      return products;
    } catch (err) {
      return console.log(err);
    }
  }

  async getProductById(id: string) {
    try {
      let product = await this.http.get(`${this.baseUrl}/${id}`).toPromise();
      return product;
    } catch (err) {
      return console.log(err);
    }
  }
}
