import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { UserDetailsService } from '../services/user-details.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  cartSubTotal:any = 0;
  cartTax:any = 0;
  cartTotal:any = 0;
  constructor(private httpClient:HttpClient,private userDetails:UserDetailsService) { }

  public totalAmountDisplay = new BehaviorSubject<any>({totalAmount:0});
  notifyObservable$ = this.totalAmountDisplay.asObservable();

  updateTotalAmount() {
    this.cartSubTotal = 0;
    this.cartTax = 0;
    this.cartTotal = 0;
    if(this.userDetails.username!='')
      {
        this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{

          user[0].cart.forEach((cartItem:any)=>{
            this.cartSubTotal+=(cartItem.price*cartItem.itemCount);
          })

          this.cartSubTotal = Math.round(this.cartSubTotal);

          this.cartTax = Math.round(0.06*(this.cartSubTotal));

          this.cartTotal = Math.round(this.cartSubTotal + this.cartTax);

          console.log("CARTSUB: ",this.cartSubTotal, "\n CARTTAX: ",this.cartTax, "\n CARTTOTAL: ",this.cartTotal);
          

          this.totalAmountDisplay.next({totalAmount:this.cartTotal});
      }
    )}
  }

}
