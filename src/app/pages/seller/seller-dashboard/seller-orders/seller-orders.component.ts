import { Component } from '@angular/core';
export interface Order {
  orderId: number;
  status: string;
  total: number;
}
@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.css']
})
export class SellerOrdersComponent {
  orders: Order[] = [];
  displayedColumns: string[] = ['orderId', 'status', 'total'];

  ngOnInit(): void {
    // Simulate fetching orders
    this.orders = [
      { orderId: 1, status: 'Processing', total: 2000 },
      { orderId: 2, status: 'Shipped', total: 5000 },
    ];
  }
}