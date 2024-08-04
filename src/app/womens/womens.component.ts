import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent {
  a:any
constructor(public b:CartServiceService){
  this.a=this.b.carttotal
}
hello(j:any){
  this.b.hello(j)
}
}
