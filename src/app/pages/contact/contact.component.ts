import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/shared/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  mailSuccess = false;
  mailFailed = false;
  isSubmitting = false;
  
  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        await this.contactService.sendMessage(this.contactForm.value).toPromise(); // Send to Firebase
        this.mailSuccess = true;
        this.mailFailed = false;
        console.log('Email sent successfully!');
        this.contactForm.reset();
      } catch (error) {
        this.mailSuccess = false;
        this.mailFailed = true;
        console.error('Failed to send email:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  sendEmail(data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) resolve();
        else reject('Email sending failed due to server error.');
      }, 1000);
    });
  }
}
