import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-reception',
  templateUrl: './car-reception.component.html',
  styleUrls: ['./car-reception.component.scss']
})
export class CarReceptionComponent implements OnInit {

  cars = [];
  loading = false;
  error = '';

  constructor(private carService: CarService) { }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.carService.receiveCar('rakoto.jean@gmail.com', form.value.car, (data) => {
      if(data) {
        this.error = data.message;
      } else {
        this.getNonReceivedCars();
      }
      this.loading = false;
    });
  }

  getNonReceivedCars() {
    this.carService.fetchNonReceived((data) => {
      this.cars = data;
    });
  }

  ngOnInit() {
    this.getNonReceivedCars();
  }

}
