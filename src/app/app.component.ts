import { Component } from '@angular/core';
import * as productsList from '../app/productsList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = (productsList as any).default;

  constructor() {

  }

  // ngOnInit() {
  //   this.apiService.getJSONData().subscribe(data => {
  //     this.products = data;
  //   })
  // }


  title = 'Shopping-App-Assignment-Internshala-Yebelo-Technology';
}
