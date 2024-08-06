import { Component } from '@angular/core';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      // Handle form submission
      console.log('Form Submitted', form.value);
    } else {
      form.control.markAllAsTouched();
    }
  }

}
