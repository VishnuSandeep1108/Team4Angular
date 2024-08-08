import { Component } from '@angular/core';
import { PaymentDetailsService } from '../services/payment-details.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  totalAmount:any = 0;
  constructor(private paymentDetails:PaymentDetailsService){
    this.paymentDetails.updateTotalAmount();
    this.paymentDetails.notifyObservable$.subscribe((response)=>{
      this.totalAmount=response.totalAmount;
    })
  }
  
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', form.value);
    } else {
      form.control.markAllAsTouched();
    }
  }

}
