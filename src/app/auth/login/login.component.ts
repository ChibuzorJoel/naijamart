import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  
    // Pre-fill email and password from sessionStorage
    const tempEmail = sessionStorage.getItem('tempEmail');
    const tempPassword = sessionStorage.getItem('tempPassword');
  
    if (tempEmail && tempPassword) {
      this.loginForm.patchValue({
        email: tempEmail,
        password: tempPassword
      });
    }
  }
  
  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      // Simulated login logic (replace with real API call)
      console.log('Login Successful:', email, password);
  
      // Navigate to seller page after successful login
      this.router.navigate(['/seller-dashboard']);
    } else {
      console.log('Invalid login');
    }
  }
}  
