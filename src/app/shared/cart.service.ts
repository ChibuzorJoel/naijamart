import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  constructor() { }
  addToCart(product: any): void {
    this.cart.push(product);
  }

  getCartItems(): any[] {
    return this.cart;
  }
}
  

