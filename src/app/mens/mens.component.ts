import { Component } from '@angular/core';
import { CardPage1Component } from '../card-page1/card-page1.component'; 
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
  servers=[{id:1,name:'T-shirt',price:'rs 499'},{id:2,name:'T-shirt',price:'rs 1499'}]
  a:any;
  constructor(public b:CartServiceService){
    this.a=b.carttotal
  }

  hello(j:any){
    this.b.hello(j);
  }
}

