import { Component, inject, input, signal } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {  ProductService } from './../../shared/services/product.service';
import { Product } from './../../modules/product.module';
import { CommonModule } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from './../../components/btn/btn.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule,CommonModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html'
})
export class TableComponent {

  private productService = inject(ProductService);


  dataSource = new DataSourceProduct();
  columns: string[] = ['cover', 'id', 'title', 'price', 'actions'];
  total = 0;
  input = new FormControl('', {nonNullable: true});

  ngOnInit(){
    this.getProducts();
    this.input.valueChanges.pipe(debounceTime(300)).subscribe(value => { 
      this.dataSource.find(value);
     });
  }

  getProducts(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.dataSource.init(products);
        this.total = this.dataSource.getTotalPrice();
      },
      error: (error)=> {
        console.log(error);
      }
    });
  }

  update(product: Product){
    this.dataSource.update(product.id, { price: 77 });
  }

}
