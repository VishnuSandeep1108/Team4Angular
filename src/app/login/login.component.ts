import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public constructor(private router:Router)
  {

  }

  onLoginHandler()
  {
    this.router.navigate(['home']);
  }

  onRegisterHandler()
  {
    this.router.navigate(['']);
  }
}
