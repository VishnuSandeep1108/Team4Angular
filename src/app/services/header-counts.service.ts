import { Injectable } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeaderCountsService {
  cartItemCount:any=0;
  constructor(private userDetails:UserDetailsService, private httpClient:HttpClient) { }

  public headerCountDisplay = new BehaviorSubject<any>({wishListCount:0,cartCountCount:0});
  notifyObservable$ = this.headerCountDisplay.asObservable();

  updateCount() {    
    if(this.userDetails.username!='')
      {
        this.cartItemCount = 0;
        this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{
          console.log(user[0].wishlist.length,"  ",user[0].cart.length);
          user[0].cart.forEach((cartItem:any)=>{
            this.cartItemCount+=cartItem.itemCount;
          })


          this.headerCountDisplay.next({wishlistCount:user[0].wishlist.length,cartCount:this.cartItemCount})
        })
      }
  }
}
