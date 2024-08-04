import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/wishlist').subscribe((response:any)=>{
       this.wishlist = response;
     })
   }

   
   onAddCart(event:any)
   {
    this.httpClient.post('http://localhost:3000/cart',event).subscribe((response:any)=>{
      alert("Added to Cart Successfully!")
    })
   }
}
