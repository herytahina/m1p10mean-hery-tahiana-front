import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    host = environment.host;

    constructor(private httpClient: HttpClient) {}

    register(user: any, callback) {
        this.httpClient.post( `${this.host}/users`, user).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }
}