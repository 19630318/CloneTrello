import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../modules/product.module'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(){
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    return this.http.get<Product[]>(url.toString());
  }

}
