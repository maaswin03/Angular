import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginResponseModel } from "../models/login.reponse.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userSubject = new BehaviorSubject<LoginResponseModel | null>(null);

    public user$ = this.userSubject.asObservable();

    constructor() {
        const user = sessionStorage.getItem("User");

        if (user) {
            this.userSubject.next(JSON.parse(user));
        }
    }

    //method for setting the user details
    setUser(user: LoginResponseModel) {
        console.log('SET USER', user);
        this.userSubject.next(user);
    }

    //method for logout the user
    logoutUser() {
        sessionStorage.removeItem("User");
        this.userSubject.next(null);
    }

    //method for checking the user is logged in
    isLoggedIn() {
        var user = sessionStorage.getItem("User");
        return user ? true : false;
    }
}