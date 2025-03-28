import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: any) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, product]);
  }

  getCartCount(): number {
    return this.cartItems.value.length;
  }
}
  

