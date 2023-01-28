import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService, private router: Router) { }

  repair(id) {
    this.router.navigate([`/car-repairs/${id}`]);
  }

  onSearch(search?) {
    this.getCars(search);
  }

  getCars(search?) {
    this.carService.fetch(search, (data) => {
      this.cars = data;
    });
  }

  deposit(car) {
    this.carService.deposit(car, (data)=> {});
  }

  depositNew() {
    this.router.navigate(['/car-deposit']);
  }
  
  history(id) {
    this.router.navigate([`/car-history/${id}`]);
  }

  ngOnInit() {
    this.getCars();
  }

}
