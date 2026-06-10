import { Component, signal } from '@angular/core';
import { AuthService } from '../../rxjs/auth.operator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  firstName = signal('');

  //constructor for fetching the logged in user name
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.firstName.set(user.firstName);
      }
    })
  }

  //method for logging out the user
  logoutUser() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }

}
