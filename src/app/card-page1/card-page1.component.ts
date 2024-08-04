import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-page1',
  templateUrl: './card-page1.component.html',
  styleUrls: ['./card-page1.component.css']
})
export class CardPage1Component implements OnInit {
  cart:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/cart').subscribe((response:any)=>{
       this.cart = response;
     })
   }

  //  onDeleteCart(event:any)
  //  {
  //   this.httpClient.delete('http://localhost:3000/cart',event).subscribe((response:any)=>{
  //     alert("Product Deleted from Cart")
  //   })
  //  }
}
