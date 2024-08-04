import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginObsService {
  public notify = new BehaviorSubject<any>({refresh:true});
  notifyObservable$ = this.notify.asObservable();

  constructor() { }
  
  public onLoggingInHandler(data : any)
  {    
    this.notify.next(data);
  }
}
