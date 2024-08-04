import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  servers=[{id:1,name:'T-shirt',price:'450',value:0}];
  carttotal=0
  hello(j:any){
    this.carttotal+=1
    console.log(this.carttotal)
    console.log(this.servers[j].name+' added')
    //return alert(this.servers[j].name+' added,please visit the cart page');

  }
  remove(){
    this.carttotal-=1
    console.log(this.carttotal)
  }
}
