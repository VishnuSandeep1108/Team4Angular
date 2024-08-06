import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  footwear:any = [];
  dummy:any = [];
  constructor(private httpClient:HttpClient,private router:Router,private userDetails:UserDetailsService,private loginObs:LoginObsService){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/mens-footwear').subscribe((response:any)=>{
        this.footwear = response;
      })
   }

   onWishlist(event:any)
   {
      if(this.userDetails.username!='')
      {
        this.httpClient.get('http://localhost:3000/users?username=',this.userDetails.username).subscribe((user:any)=>{
          user[0].wishlist.push(event);
          this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
            alert("Wishlisted Successfully!")
          })
        })
      }

      else
      {
        this.router.navigate(['auth']);
      }
   }

   onAddCart(event:any)
   {
    if(this.userDetails.username!='')
      {
        this.httpClient.get('http://localhost:3000/users?username=',this.userDetails.username).subscribe((user:any)=>{
          user[0].cart.push(event);
          this.httpClient.put(`http://localhost:3000/users/${user[0].id}`,user[0]).subscribe((response:any)=>{
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
