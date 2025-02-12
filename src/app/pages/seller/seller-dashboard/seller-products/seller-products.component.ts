import { Component, OnInit } from '@angular/core';
export interface Product {
  name: string;
  price: number;
  category: string;
}
@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit {
  productName: string = '';
  productPrice: number = 0;
  productCategory: string = '';
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch products from API (simulate for now)
    this.products = [
      { name: 'Product 1', price: 1000, category: 'Textiles' },
      { name: 'Product 2', price: 1500, category: 'Food' },
    ];
  }

  addProduct(): void {
    if (this.productName && this.productPrice > 0 && this.productCategory) {
      const newProduct = {
        name: this.productName,
        price: this.productPrice,
        category: this.productCategory,
      };

      // Add product to the list (mocking a real API call)
      this.products.push(newProduct);

      // Reset form fields
      this.productName = '';
      this.productPrice = 0;
      this.productCategory = '';
    }
  }
}
