import { Component, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginObsService } from '../services/login-obs.service';
import { LoginBtnDisplayService } from '../services/login-btn-display.service';
import { UserDetailsService } from '../services/user-details.service';
import { HeaderCountsService } from '../services/header-counts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  wishlistCount:any;
  cartCount:any;
  loginBtnDisplay:boolean = true;
  constructor(private loginObs:LoginObsService, private loginBtnDisplayService:LoginBtnDisplayService, private userDetails:UserDetailsService,private router:Router,private httpClient:HttpClient, private headerCounts:HeaderCountsService){
    this.loginBtnDisplayService.notifyObservable$.subscribe((res)=>{
      this.loginBtnDisplay = res.refresh;
    })

    this.headerCounts.notifyObservable$.subscribe((res)=>{
      this.wishlistCount = res.wishlistCount,
      this.cartCount = res.cartCount;
    })
  }

  loginCheck()
  {
    console.log("CHECKED");
    
    if(this.userDetails.username == '')
    {
      console.log("YES");
      
      this.loginObs.onLoggingInHandler({refresh:false});
      this.router.navigate(['auth']);
    }
}

  onAuthHandler()
  {
    this.loginObs.onLoggingInHandler({refresh:false})
  }
 
  onLogout()
  {
    this.loginObs.onLoggingInHandler({refresh:true})
  }
}
