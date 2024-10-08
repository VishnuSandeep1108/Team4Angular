import { Component, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginObsService } from '../services/login-obs.service';
import { LoginBtnDisplayService } from '../services/login-btn-display.service';
import { UserDetailsService } from '../services/user-details.service';
import { HeaderCountsService } from '../services/header-counts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:String = '';
  password:String = '';
  constructor(private router:Router, private loginObs:LoginObsService, private loginBtnDisplay:LoginBtnDisplayService, private httpClient:HttpClient, private userDetails:UserDetailsService,private headerCounts:HeaderCountsService){}

  onLoginHandler(event:any)
  {
    event.preventDefault();

    this.httpClient.get('http://localhost:3000/users?username='+this.username).subscribe((response:any)=>{
      console.log(response);
      if(response.length===1)
      {
        if(response[0].password === this.password)
        {
          this.loginObs.onLoggingInHandler({refresh:true});
          this.loginBtnDisplay.onLoginSuccess({refresh:false});
          this.userDetails.onLogin({username:this.username});
              
          this.headerCounts.updateCount();
          this.router.navigate(['']);
        }

        else
        {
          alert("Incorrect Password")
          this.router.navigate(['auth']);
        }
      }

      else
      {
        alert("Username does not exist")
        this.router.navigate(['auth']);
      }
    })
  }

  onRegisterHandler(event:any)
  {
    event.preventDefault();

    this.httpClient.get('http://localhost:3000/users?username='+this.username).subscribe((response:any)=>{
      if(response.length!=0)
      {
        alert("Username already in use")
        this.router.navigate(['auth']);
      }

      else
      {
        alert("successfully Signed Up, Please Login to proceed")
        this.httpClient.post('http://localhost:3000/users',{username:this.username,password: this.password,wishlist: [],cart: []}).subscribe((response:any)=>{
          this.router.navigate(['auth']);
        })
      }
    })
  }
}
