import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../rxjs/auth.operator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  firstName: string = '';

  //constructor for fetching the logged in user
  constructor(private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.firstName = user.firstName;
      }
    });
  }
}