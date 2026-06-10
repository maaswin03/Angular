import { Component, signal, Signal } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthApiService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user = signal<UserModel>(new UserModel())

  //constructor for fetching the logged in user using jwt token
  constructor(private service: AuthApiService) {
    this.service.getUser().subscribe({
      next: (response) => {
        this.user.set(response);
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
