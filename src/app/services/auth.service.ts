import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    host = environment.host;
    loggedIn = false;
    user = null;

    constructor(private httpClient: HttpClient) {}

    register(user: any, callback) {
        this.httpClient.post( `${this.host}/users`, user).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }

    login(email: string, password: string, callback) {
        this.httpClient.post( `${this.host}/users/login`, {email, password}).subscribe((data: any) => {
            if(!data.message) {
                this.loggedIn = true;
                this.user = data;
            }
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }
}