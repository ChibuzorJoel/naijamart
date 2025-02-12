import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav; // Bind to the sidenav in the template

  toggleSidenav() {
    this.sidenav.toggle(); // Toggles the sidenav open or closed
  }
}
