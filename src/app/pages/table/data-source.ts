import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Product } from './../../modules/product.module';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product>{

    data = new BehaviorSubject<Product[]>([]);
    private originalData: Product[] =[];
    
    init(products: Product[]){
        this.data.next(products);
        this.originalData = products;
    }

    getTotalPrice(){
        const products = this.data.getValue();
        return products.map(item => item.price).reduce((price, total)=> price + total, 0);
    }

    override connect(collectionViewer: CollectionViewer): Observable<readonly Product[]> {
        return this.data;
        //throw new Error('Method not implemented.');
    }
    override disconnect(collectionViewer: CollectionViewer): void {
        //throw new Error('Method not implemented.');
    }

    update(id: Product['id'], changes: Partial<Product>){
        const products = this.data.getValue();
        const productIndex = products.findIndex(item => item.id === id);
        if(productIndex !== -1){
            products[productIndex] = {
                ...products[productIndex],
                ...changes,
            }
            this.data.next(products);
        }
    }

    find(query: string){
        const newProducts = this.originalData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(query.toLowerCase()) ||
        item.id.toString().toLowerCase().includes(query.toLowerCase()) ||
        item.category.name.toString().toLowerCase().includes(query.toLowerCase())
        );
        this.data.next(newProducts);
    }

}