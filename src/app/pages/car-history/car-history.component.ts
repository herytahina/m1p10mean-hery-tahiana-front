import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.scss']
})
export class CarHistoryComponent implements OnInit {

  data = {};
  loading = true;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.carService.history(this.route.snapshot.params['id'], (res) => {
      this.data = res;
      this.loading = false;
    });
  }

}
