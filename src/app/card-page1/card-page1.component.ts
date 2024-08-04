import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-card-page1',
  templateUrl: './card-page1.component.html',
  styleUrls: ['./card-page1.component.css']
})
export class CardPage1Component {
  // servers=[{id:1,name:'T-shirt',price:'450',value:0}];
  // carttotal=0
  // hello(j:any){
  //   this.carttotal+=1
  //   console.log(this.carttotal)
  //   console.log(this.servers[j].name+' added')
  //   //return alert(this.servers[j].name+' added,please visit the cart page');

  // }
  // remove(){
  //   this.carttotal-=1
  //   console.log(this.carttotal)
  // }
  constructor(public d:CartServiceService){}
      
    
  
}
