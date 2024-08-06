import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist:any = [];
  constructor(private httpClient:HttpClient,private userDetails:UserDetailsService,private router:Router){}
   ngOnInit(): void {
    
     if(this.userDetails.username!='')
      {
        this.httpClient.get(`http://localhost:3000/users?${this.userDetails.username}`).subscribe((user:any)=>{
          this.wishlist = user[0].wishlist;
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
        this.router.navigate(['auth']);
      }
   }
}
