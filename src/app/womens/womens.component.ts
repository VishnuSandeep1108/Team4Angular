import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';
import { LoginObsService } from '../services/login-obs.service';



@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {
  womens:any = [];
  constructor(private httpClient:HttpClient,private userDetails:UserDetailsService,private router:Router,private loginObs:LoginObsService){}
   ngOnInit(): void {
     this.httpClient.get('http://localhost:3000/womens').subscribe((response:any)=>{
       this.womens = response;
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
        this.router.navigate(['auth']);
      }
   }
}
