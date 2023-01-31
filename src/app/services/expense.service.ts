import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ExpenseService {

    host = environment.host;

    constructor(private httpClient: HttpClient) {}

    add(expense: any, callback) {
        this.httpClient.post( `${this.host}/expenses`, expense).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }

    fetch(callback) {
        this.httpClient.get(`${this.host}/expenses`).subscribe((data: any[]) => {
            callback(data)
        }), (err) => {
            callback(err.error);
        }
    }

    fetchOne(id, callback) {
        this.httpClient.get(`${this.host}/expenses/`+id).subscribe((data: any[]) => {
            callback(data)
        }), (err) => {
            callback(err.error);
        }
    }

    delete(id, callback?) {
        this.httpClient.delete(`${this.host}/expenses?id=`+id).subscribe(() => {
            callback();
        });
    }

    update(id, expense: any, callback?) {
        this.httpClient.put(`${this.host}/expenses?id=`+id, expense).subscribe(() => {
            callback();
        })
    }
}