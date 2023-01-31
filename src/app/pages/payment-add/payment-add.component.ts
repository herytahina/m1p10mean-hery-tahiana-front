import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {
  loading = false;
  amountError = false;
  paymentDateError = false;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(['/payment']);
  }

  checkError(form: NgForm) {
    // console.log(form.value.amount);
    (form.value.amount == "") ? this.amountError = true : this.amountError = false;
    (form.value.paymentDate == "") ? this.paymentDateError = true : this.paymentDateError = false;

    if(!this.amountError && !this.paymentDateError) this.submitForm(form);
  }

  submitForm(form: NgForm) {
    console.log(this.route.snapshot.params.car_id)
    this.loading = true;
    this.carService.addPayment(this.route.snapshot.params.car_id, form.value, () => {
      this.loading = false;
      this.router.navigateByUrl('/payment');
    })
  }

}
