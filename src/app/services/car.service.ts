import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CarService {

    private host = environment.host;
    cars = [];
    user_id = JSON.parse(sessionStorage.getItem('user'))._id;

    constructor(private httpClient: HttpClient) {}

    fetch(search?, callback?) {
        let path = `${this.host}/cars?user=`+this.user_id;
        if(search)
            path += `&search=${search}`;
        this.httpClient.get(path).subscribe((data: any[]) => {
            this.cars = data;
            callback(data)
        })
    }

    deposit(car: any, callback) {
        this.httpClient.post( `${this.host}/cars/deposit?user=`+this.user_id, car).subscribe((data) => {
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