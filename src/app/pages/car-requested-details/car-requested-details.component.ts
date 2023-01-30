import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-requested-details',
  templateUrl: './car-requested-details.component.html',
  styleUrls: ['./car-requested-details.component.scss']
})
export class CarRequestedDetailsComponent implements OnInit {

  data: any = {};
  loading = true;
  sendLoading = false;

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  validate() {
    this.sendLoading = true;
    this.carService.validateExit(this.data._id, () => {
      this.sendLoading = false;
      this.router.navigateByUrl('/requested-cars');
    })
  }

  getRepairs() {
    this.loading = true;
    this.carService.repairs(this.route.snapshot.params['id'], (res) => {
      this.data = res;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.getRepairs();
  }

}
