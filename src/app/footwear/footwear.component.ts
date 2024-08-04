import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  footwear:any = [];
  dummy:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/mens-footwear').subscribe((response:any)=>{
        this.footwear = response;
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
