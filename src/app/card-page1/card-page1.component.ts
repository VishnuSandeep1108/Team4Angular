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
  user:any;
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
}
