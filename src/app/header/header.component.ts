import { Component } from '@angular/core';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { MensComponent } from '../mens/mens.component';
import { CardPage1Component } from '../card-page1/card-page1.component';
import { WomensComponent } from '../womens/womens.component';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  d:any
  constructor(public b:MensComponent,public c:WomensComponent,public e:CardPage1Component,public g:CartServiceService){
    this.d=g.carttotal
  }

  
}
