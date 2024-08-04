import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  mens:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/mens').subscribe((response:any)=>{
       this.mens = response;
     })
   }

   onWishlist(event:any)
   {
    this.httpClient.post('http://localhost:3000/wishlist',event).subscribe((response:any)=>{
      alert("Wishlisted Successfully!")
    })
   }

   onAddCart(event:any)
   {
    this.httpClient.post('http://localhost:3000/cart',event).subscribe((response:any)=>{
      alert("Added to Cart Successfully!")
    })
   }
}
