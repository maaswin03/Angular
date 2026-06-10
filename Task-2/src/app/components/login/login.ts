import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestModel } from '../../models/login.request.model';
import { AuthApiService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../rxjs/auth.operator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage = signal('');
  isLoading = signal(false);

  //constructor
  constructor(private service: AuthApiService, private authService: AuthService, private router: Router) { }

  //method for logging a user
  loginUser() {
    this.errorMessage.set('');

    if (!this.username.trim()) { //check the username
      this.errorMessage.set("Username is required");
      return;
    }
    if (!this.password.trim()) { //check the password
      this.errorMessage.set("Password is required");
      return;
    }

    this.isLoading.set(true); //set loading as true

    let loginRequestModel = new LoginRequestModel(); //create login object
    loginRequestModel.username = this.username;
    loginRequestModel.password = this.password;

    this.service.loginUser(loginRequestModel).subscribe({
      next: (response) => {
        this.errorMessage.set('');
        this.isLoading.set(false);

        sessionStorage.setItem("User", JSON.stringify(response));
        this.authService.setUser(response);

        console.log('Login Successfull', response);
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        this.errorMessage.set('Invalid username or password');
        this.isLoading.set(false);
        console.log('Login Failed', error);
      }
    })
  }
}
