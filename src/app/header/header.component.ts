import { Component } from '@angular/core';

import { LoginObsService } from '../services/login-obs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private loginObs:LoginObsService){}

  onAuthHandler()
  {
    this.loginObs.onLoggingInHandler({refresh:true})
  }
}
