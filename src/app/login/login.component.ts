import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private active:ActivatedRoute){

  }

onclickhandler(){
   this.router.navigate(['home']);
}
}
