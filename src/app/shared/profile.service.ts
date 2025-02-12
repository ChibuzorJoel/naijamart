import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'https://api.naijamart.com'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  getSellerProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/seller/products`);
  }

  getSellerOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/seller/orders`);
  }

  getBuyerOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/buyer/orders`);
  }
}