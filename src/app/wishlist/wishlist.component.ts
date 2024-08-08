import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';
import { HeaderCountsService } from '../services/header-counts.service';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist:any = [];
  wishlistEmpty:any = true;
  constructor(private httpClient:HttpClient,private userDetails:UserDetailsService,private router:Router,private loginObs:LoginObsService, private headerCounts:HeaderCountsService){}
   ngOnInit(): void {
    
     if(this.userDetails.username!='')
      {        
        this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{
          this.wishlist = user[0].wishlist;

          if(this.wishlist.length === 0)
            this.wishlistEmpty = true;
          else
            this.wishlistEmpty = false;
        })
      }

      else
      {
        this.loginObs.onLoggingInHandler({refresh:false});
        this.router.navigate(['auth']);
      }
   }

   

   onAddCart(event:any)
   {
    console.log(this.userDetails.username);
    let flag:boolean=false;
    
    if(this.userDetails.username!='')
      {
        console.log("VALID");
        
        this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{
          user[0].cart.forEach((item:any)=>{
            if(item.id === event.id)
            {
              item.itemCount++;
              flag = true;
              return;
            }
          })

          if(flag === false)
          {
            user[0].cart.push(event);
          }
          
          this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
            this.headerCounts.updateCount();
            alert("Added to Cart Successfully!")
          })
        })
      }

      else
      {
        this.loginObs.onLoggingInHandler({refresh:false});
        this.router.navigate(['auth']);
      }
   }

   onWishlistDelete(productId:any)
   {
    this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{
      this.wishlist = user[0].wishlist;

      let index:any;

      index = this.wishlist.findIndex((item:any)=>{
        return item.id === productId;
      })

      this.wishlist.splice(index,1);

      user[0].wishlist = this.wishlist;
      
      if(this.wishlist.length === 0)
        this.wishlistEmpty = true;
      else
        this.wishlistEmpty = false;

      this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
        this.headerCounts.updateCount();
        console.log("Product Removed from Wishlist!");
      })
    })
   }
}
