import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';


@Component({
  selector: 'app-card-page1',
  templateUrl: './card-page1.component.html',
  styleUrls: ['./card-page1.component.css']
})
export class CardPage1Component implements OnInit {
  cart:any = [];
  productQuantity:any = 1;
  constructor(private httpClient:HttpClient,private router:Router,private userDetails:UserDetailsService, private loginObs:LoginObsService){}
   ngOnInit(): void {
    if(this.userDetails.username!='')
      {
        // console.log("USERNAME: ",this.userDetails.username);

        this.httpClient.get(`http://localhost:3000/users?${this.userDetails.username}`).subscribe((user:any)=>{
          this.cart = user[0].cart;
      }
    )}

      else
      {
        this.loginObs.onLoggingInHandler({refresh:false});
        this.router.navigate(['auth']);
      }
   }
   
   onCartQuantDecrease(productId:any)
   {
      this.httpClient.get(`http://localhost:3000/users?${this.userDetails.username}`).subscribe((user:any)=>{
        this.cart = user[0].cart;

        this.cart.forEach((cartItem:any) => {
          if(cartItem.id === productId)
            cartItem.itemCount--;

            let index:any;

            if(cartItem.itemCount === 0)
            {
                index = this.cart.findIndex((item:any)=>{
                return item.id === productId;
              })

              this.cart.splice(index,1);
            }
        });

        user[0].cart = this.cart;

        this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
          console.log("Product Count Reduced!");
        })
      })
   }
  
   onCartQuantIncrease(productId:any)
   {
      this.httpClient.get(`http://localhost:3000/users?${this.userDetails.username}`).subscribe((user:any)=>{
        this.cart = user[0].cart;

        this.cart.forEach((cartItem:any) => {
          if(cartItem.id === productId)
            cartItem.itemCount++;
        });

        user[0].cart = this.cart;

        this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
          console.log("Product Count Raised!");
        })
      })
   }

   onCartDelete(productId:any)
   {
    this.httpClient.get(`http://localhost:3000/users?${this.userDetails.username}`).subscribe((user:any)=>{
      this.cart = user[0].cart;

      let index:any;

      index = this.cart.findIndex((item:any)=>{
        return item.id === productId;
      })

      this.cart.splice(index,1);

      user[0].cart = this.cart;

      this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
        console.log("Product Count Reduced!");
      })
    })
   }
}
