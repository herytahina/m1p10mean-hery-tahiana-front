import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-car-list',
  templateUrl: './payment-car-list.component.html',
  styleUrls: ['./payment-car-list.component.scss']
})
export class PaymentCarListComponent implements OnInit {
  cars = [];

  constructor(private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.fetchForPayment((data) => {
      this.cars = data;
    })
  }

  toNewPayment(car_id) {
    this.router.navigate(['/payment-new/'+car_id]);
  }
}
