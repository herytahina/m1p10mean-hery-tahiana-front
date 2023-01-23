import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ToastyService } from 'ng2-toasty';
// import { ToastData, ToastOptions } from 'ng2-toasty/src/toasty.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-deposit',
  templateUrl: './car-deposit.component.html',
  styleUrls: ['./car-deposit.component.scss']
})
export class CarDepositComponent implements OnInit {

  position = 'bottom-right';
  loading = false;
  error = "";

  constructor(private carService: CarService, 
    // private toastyService: ToastyService
    ) { }

  onSubmit(form: NgForm) {
    const car = {
      immatriculation: form.value.immatriculation,
      brand: form.value.brand,
      model: form.value.model
    }
    this.loading = true;
    this.carService.deposit(car, (data) => {
      if(data.message)
        this.error = data.message;
      // else
      //   this.addToast({title:'Voiture déposée', msg:'La voiture a été déposée avec succès.', showClose: true, timeout: 5000, theme:'bootstrap', type:'wait', position:'bottom-right', closeOther:true})
      this.loading = false;
    });
  }

  // addToast(options) {
  //   if (options.closeOther) {
  //     this.toastyService.clearAll();
  //   }
  //   this.position = options.position ? options.position : this.position;
  //   const toastOptions: ToastOptions = {
  //     title: options.title,
  //     msg: options.msg,
  //     showClose: options.showClose,
  //     timeout: options.timeout,
  //     theme: options.theme,
  //     onAdd: (toast: ToastData) => {
  //       /* added */
  //     },
  //     onRemove: (toast: ToastData) => {
  //       /* removed */
  //     }
  //   };

  //   switch (options.type) {
  //     case 'default': this.toastyService.default(toastOptions); break;
  //     case 'info': this.toastyService.info(toastOptions); break;
  //     case 'success': this.toastyService.success(toastOptions); break;
  //     case 'wait': this.toastyService.wait(toastOptions); break;
  //     case 'error': this.toastyService.error(toastOptions); break;
  //     case 'warning': this.toastyService.warning(toastOptions); break;
  //   }
  // }

  ngOnInit() {
  }

}
