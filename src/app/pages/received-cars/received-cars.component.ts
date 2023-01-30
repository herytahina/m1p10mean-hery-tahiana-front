import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-received-cars',
  templateUrl: './received-cars.component.html',
  styleUrls: ['./received-cars.component.scss']
})
export class ReceivedCarsComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService, private router: Router, private authService: AuthService) { }

  details(immatriculation) {
    this.router.navigateByUrl(`/received-cars-details/${immatriculation}`);
  }

  getCars() {
    this.carService.receivedCars(this.authService.user.email, (data) => {
      this.cars = data;
    });
  }

  ngOnInit() {
    this.getCars();
  }
}
