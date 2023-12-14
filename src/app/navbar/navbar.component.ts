import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  count = 0;
  logIn() {
    this.count += 1;
  }

  logOut() {
    this.count -= 1;
  }
}
