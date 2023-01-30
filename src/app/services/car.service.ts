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

    exitRequest(id, callback) {
        this.httpClient.put(`${this.host}/cars/${id}/recover`, {}).subscribe((data) => {
            callback(data);
        }), (err) => {
            callback(err.error);
        }
    }

    fetchNonReceived(callback) {
        this.httpClient.get(`${this.host}/cars/nonReceived`).subscribe((data: any[]) => {
            this.cars = data;
            callback(data);
        }, (err) => {
            callback(err);
        });
    }

    receiveCar(mechanic, immatriculation, callback) {
        this.httpClient.put(`${this.host}/cars/${immatriculation}/reception?mechanic=${mechanic}`, {}).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err);
        });
    }

    receivedCars(mechanic, callback) {
        this.httpClient.get(`${this.host}/cars/received?mechanic=${mechanic}`).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err);
        });
    }
    
    addRepairs(immatriculation, repairs, callback) {
        this.httpClient.post(`${this.host}/cars/${immatriculation}/repairs`, {repairs}).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err);
        });
    }

    updateRepairProgression(carId, name, progression, callback) {
        this.httpClient.put(`${this.host}/cars/${carId}/repairs`, {
            name,
            progression
        }).subscribe((data) => {
            callback(data);
        }, (err) => {
            callback(err);
        });
    }
}