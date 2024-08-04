import { Component, EventEmitter, Output } from '@angular/core';

import { LoginObsService } from '../services/login-obs.service';
import { LoginBtnDisplayService } from '../services/login-btn-display.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loginBtnDisplay:boolean = true;
  constructor(private loginObs:LoginObsService, private loginBtnDisplayService:LoginBtnDisplayService){
    this.loginBtnDisplayService.notifyObservable$.subscribe((res)=>{
      this.loginBtnDisplay = res.refresh;
    })
  }

  onAuthHandler()
  {
    this.loginObs.onLoggingInHandler({refresh:false})
  }
}
