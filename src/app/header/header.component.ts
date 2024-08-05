import { Component, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


import { LoginObsService } from '../services/login-obs.service';
import { LoginBtnDisplayService } from '../services/login-btn-display.service';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginBtnDisplay:boolean = true;
  constructor(private loginObs:LoginObsService, private loginBtnDisplayService:LoginBtnDisplayService, private userDetails:UserDetailsService,private router:Router){
    this.loginBtnDisplayService.notifyObservable$.subscribe((res)=>{
      this.loginBtnDisplay = res.refresh;
    })
  }

  loginCheck()
  {
    
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
}
