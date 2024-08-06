import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';


@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  mens:any = [];
  constructor(private httpClient:HttpClient, private userDetails:UserDetailsService,private router:Router, private loginObs:LoginObsService){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/mens').subscribe((response:any)=>{
       this.mens = response;
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
        this.loginObs.onLoggingInHandler({refresh:false});
        this.router.navigate(['auth']);
      }
   }

   onAddCart(event:any)
   {
    console.log(this.userDetails.username);
    
    if(this.userDetails.username!='')
      {
        console.log("VALID");
        
        this.httpClient.get('http://localhost:3000/users?username=',this.userDetails.username).subscribe((user:any)=>{
          user[0].cart.push(event);
          console.log(user);
          
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
