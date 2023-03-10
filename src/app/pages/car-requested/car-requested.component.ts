import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-requested',
  templateUrl: './car-requested.component.html',
  styleUrls: ['./car-requested.component.scss']
})
export class CarRequestedComponent implements OnInit {

  cars = [];

  constructor(private carService: CarService, private router: Router, private authService: AuthService) { }

  details(index) {
    this.router.navigateByUrl(`/car-requested-details/${this.cars[index].immatriculation}`);
  }

  getCars() {
    this.carService.requestedCars(this.authService.user.email, (data) => {
      this.cars = data;
    });
  }

  ngOnInit() {
    this.getCars();
  }
}
