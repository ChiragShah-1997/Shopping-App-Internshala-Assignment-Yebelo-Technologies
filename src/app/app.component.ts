import { Component } from '@angular/core';
import * as productsList from '../app/productsList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = (productsList as any).default;
  productsCopy = [...this.products];
  filteredProducts = this.products.map((prod: any) => { return prod.p_category; }).flat(1);
  uniqueProductsCategory = [...new Set(this.filteredProducts)];
  defaultSelected = '';

  constructor() {
    // this.filteredProducts.unique();
    console.log(this.uniqueProductsCategory)
  }

  filterCategories(newValue: any) {
    this.defaultSelected = newValue;
    this.products = this.products.filter((prod: any) => { return prod.p_category === this.defaultSelected });
  }




  title = 'Shopping-App-Assignment-Internshala-Yebelo-Technology';
}
