import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor ( private router:Router,private active :ActivatedRoute){

  }
  onClickHandler(){
    this.router.navigate(["home"]);
}
}
