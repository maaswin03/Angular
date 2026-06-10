import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequestModel } from "../models/login.request.model";
import { baseUrl } from "../../environment";
import { LoginResponseModel } from "../models/login.reponse.model";
import { UserModel } from "../models/user.model";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthApiService {
    constructor(private http: HttpClient) { }

    //method for signing in a user
    public loginUser(loginModel: LoginRequestModel) {
        let url = baseUrl + '/auth/login';
        return this.http.post<LoginResponseModel>(url, loginModel).pipe(
            tap(response => console.log('User fetched : ', response.id))
        );
    }

    //method for getting a user details
    public getUser() {
        let url = baseUrl + '/auth/me';
        return this.http.get<UserModel>(url).pipe(
            tap(response => console.log('User fetched : ', response.id))
        );
    }
}