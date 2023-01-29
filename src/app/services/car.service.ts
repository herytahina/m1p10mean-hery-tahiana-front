import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CarService {

    private host = environment.host;
    cars = [];

    constructor(private httpClient: HttpClient) {}

    fetch(search?, callback?) {
        let path = `${this.host}/cars?user=63d4fce3b17e7dffc315544d`;
        if(search)
            path += `&search=${search}`;
        this.httpClient.get(path).subscribe((data: any[]) => {
            this.cars = data;
            callback(data)
        })
    }

    deposit(car: any, callback) {
        this.httpClient.post( `${this.host}/cars/deposit?user=63d4fce3b17e7dffc315544d`, car).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err.error);
        })
    }

    repairs(id, callback) {
        this.httpClient.get(`${this.host}/cars/${id}/repairs`).subscribe((data) => {
            callback(data);
        }), (err) => {
            callback(err.error);
        }
    }

    history(id, callback) {
        this.httpClient.get(`${this.host}/cars/${id}/repairs/history`).subscribe((data) => {
            callback(data);
        }), (err) => {
            callback(err.error);
        }
    }
}