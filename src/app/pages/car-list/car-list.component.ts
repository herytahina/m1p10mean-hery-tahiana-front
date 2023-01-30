import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: [
    './car-list.component.scss',
    '../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../node_modules/ng2-toasty/style-material.css'
]
})
export class CarListComponent implements OnInit {

  position = 'bottom-right';
  cars = [];

  constructor(private carService: CarService, private router: Router, private toastyService: ToastyService) { }

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
    this.carService.deposit(car, (data)=> {
      this.getCars();
    });
  }

  depositNew() {
    this.router.navigate(['/car-deposit']);
  }
  
  history(id) {
    this.router.navigate([`/car-history/${id}`]);
  }

  exitRequest(car) {
    this.carService.exitRequest(car, (data) => {
      this.getCars();
    });
  }

  ngOnInit() {
    this.getCars();
  }

  
  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

}
