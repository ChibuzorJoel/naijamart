import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CartService } from 'src/app/shared/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  @ViewChild('sidenav') sidenav!: MatSidenav; // Bind to the sidenav in the template
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartCount = items.length;
    });
  }
  toggleSidenav() {
    this.sidenav.toggle(); // Toggles the sidenav open or closed
  }
}
