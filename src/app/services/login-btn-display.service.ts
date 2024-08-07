import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginBtnDisplayService {

  constructor() { }

  public loginBtnDisplay = new BehaviorSubject<any>({refresh:true});
  notifyObservable$ = this.loginBtnDisplay.asObservable();

  onLoginSuccess(data:any)
  {
    this.loginBtnDisplay.next(data)
  }
}
