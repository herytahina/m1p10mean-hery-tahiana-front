import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class AdministratorService {

    host = environment.host;

    constructor(private httpClient: HttpClient) {}

    add(user: any, callback) {
        this.httpClient.post( `${this.host}/users/administrator`, user).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }

    fetch(callback) {
        this.httpClient.get(`${this.host}/users/administrator`).subscribe((data: any[]) => {
            callback(data)
        }), (err) => {
            callback(err.error);
        }
    }

    fetchOne(id, callback) {
        this.httpClient.get(`${this.host}/users/administrator/`+id).subscribe((data: any[]) => {
            callback(data)
        }), (err) => {
            callback(err.error);
        }
    }

    delete(id, callback?) {
        this.httpClient.delete(`${this.host}/users/administrator?id=`+id).subscribe(() => {
            // console.log(id + 'deleted');
            callback();
        });
    }

    update(id, user: any, callback?) {
        this.httpClient.put(`${this.host}/users/administrator?id=`+id, user).subscribe(() => {
            callback();
        })
    }
}