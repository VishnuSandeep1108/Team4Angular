import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';
import { HeaderCountsService } from '../services/header-counts.service';



@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  footwear:any = [];
  dummy:any = [];
  constructor(private httpClient:HttpClient,private router:Router,private userDetails:UserDetailsService,private loginObs:LoginObsService, private headerCounts:HeaderCountsService){}
   ngOnInit(): void {
     this.httpClient.get(`http://localhost:3000/mens-footwear`).subscribe((response:any)=>{
        this.footwear = response;
      })
   }

   onWishlist(event:any)
   {
      let flag:boolean = false;
      if(this.userDetails.username!='')
      {
        this.httpClient.get(`http://localhost:3000/users?username=${this.userDetails.username}`).subscribe((user:any)=>{
          user[0].wishlist.forEach((item:any)=>{
            if(item.id === event.id)
            {
              flag = true;
              return;
            }
          })

          if(flag === false)
          {
            user[0].wishlist.push(event);
            this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
              this.headerCounts.updateCount();
              alert("Wishlisted Successfully!")
            })
          }

          else
          {
            alert("Already Wishlisted!");
          }
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
}
