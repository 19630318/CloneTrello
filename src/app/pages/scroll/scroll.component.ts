import { Component, Signal, inject, signal } from '@angular/core';
import {  ProductService } from './../../shared/services/product.service';
import { Product } from './../../modules/product.module';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  private productService = inject(ProductService);

  products = signal<Product[]>([]);

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products);
      },
      error: (error)=> {
        console.log(error);
      }
    });
  }

}
