import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  onSubmit(form: any): void {
    if (form.valid) {
      // Handle form submission
      console.log('Form Submitted', form.value);
    } else {
      form.control.markAllAsTouched();
    }
  }

}
