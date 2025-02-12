import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {

  constructor(private router: Router) {}

  // Method to handle navigation
  navigateTo(path: string): void {
    this.router.navigate([`/seller/dashboard/${path}`]);
  }
}
