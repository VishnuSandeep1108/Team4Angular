import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {
  kids:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/kids').subscribe((response:any)=>{
       this.kids = response;
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
