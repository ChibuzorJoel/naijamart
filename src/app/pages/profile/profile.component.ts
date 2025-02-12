import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  isSeller: boolean = false;
  products: any[] = [];
  orders: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.profileService.getProfile().subscribe(
      (data) => {
        this.user = data.user;
        this.isSeller = this.user.role === 'Seller';

        if (this.isSeller) {
          this.getSellerProducts();
          this.getSellerOrders();
        } else {
          this.getBuyerOrders();
        }
      },
      (error) => {
        console.error('Error fetching profile', error);
      }
    );
  }

  getSellerProducts() {
    this.profileService.getSellerProducts().subscribe(
      (products) => (this.products = products),
      (error) => console.error('Error fetching products', error)
    );
  }

  getSellerOrders() {
    this.profileService.getSellerOrders().subscribe(
      (orders) => (this.orders = orders),
      (error) => console.error('Error fetching seller orders', error)
    );
  }

  getBuyerOrders() {
    this.profileService.getBuyerOrders().subscribe(
      (orders) => (this.orders = orders),
      (error) => console.error('Error fetching buyer orders', error)
    );
  }
}