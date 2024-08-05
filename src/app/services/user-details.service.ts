import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  username:any = '';
  constructor() { }

  onLogin(event:any)
  {
    this.username = event.username;
  }
}
