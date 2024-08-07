import { Component } from '@angular/core';
import { PaymentDetailsService } from '../services/payment-details.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  totalAmount:any=0;
  constructor(private paymentDetails:PaymentDetailsService){
    this.paymentDetails.updateTotalAmount();
    this.paymentDetails.notifyObservable$.subscribe((response)=>{
      console.log("RESPONSE: ",response);
      
      this.totalAmount=response.totalAmount;
    })
  }
}
