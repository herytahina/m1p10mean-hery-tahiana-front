import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService) { }

  onSearch(search?) {
    this.getCars(search);
  }

  getCars(search?) {
    this.carService.fetch(search, (data) => {
      this.cars = data;
    });
  }

  deposit(car) {
    this.carService.deposit(car, (data)=> {})
  }

  ngOnInit() {
    this.getCars();
  }

}
