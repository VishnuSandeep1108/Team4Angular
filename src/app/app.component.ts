import { Component } from '@angular/core';

import { LoginObsService } from './services/login-obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean = true;
  title = 'Team4Angular_ECommerce';

  constructor(private loginObs:LoginObsService){
    this.loginObs.notifyObservable$.subscribe((res)=>{
      console.log("RES: ",res);
      this.flag = res.refresh;
    })
  }
}