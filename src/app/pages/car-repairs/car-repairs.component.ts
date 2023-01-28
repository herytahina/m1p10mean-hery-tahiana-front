import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-repairs',
  templateUrl: './car-repairs.component.html',
  styleUrls: ['./car-repairs.component.scss']
})
export class CarRepairsComponent implements OnInit {

  data = {};
  loading = true;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.carService.repairs(this.route.snapshot.params['id'], (res) => {
      this.data = res;
      this.loading = false;
    });
  }

}
