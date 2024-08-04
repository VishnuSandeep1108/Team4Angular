import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {
  womens:any = [];
  constructor(private httpClient:HttpClient){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/womens').subscribe((response:any)=>{
       this.womens = response;
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
