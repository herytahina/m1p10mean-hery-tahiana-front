import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-received-cars-details',
  templateUrl: './received-cars-details.component.html',
  styleUrls: ['./received-cars-details.component.scss']
})
export class ReceivedCarsDetailsComponent implements OnInit {

  data: any = {};
  loading = true;
  showModal = false;
  showModalAnimate = false;
  showModalUpdate = false;
  showModalAnimateUpdate = false;
  updateRepair = 0;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  onAdd(form: NgForm) {
    this.carService.addRepairs(this.route.snapshot.params['id'], [
      {
        name: form.value.name,
        price: form.value.price,
        remark: form.value.remark,
        progression: 0
      }
    ], () => {
      this.getRepairs();
      this.hideModal();
    })
  }

  show() {
    this.showModal = true;
    setTimeout(() => this.showModalAnimate = true, 100);
  }
  
  hideModal() {
    this.showModalAnimate = false;
    setTimeout(() => this.showModal = false, 300);
  }

  showUpdate(index) {
    this.updateRepair = index;
    this.showModalUpdate = true;
    setTimeout(() => this.showModalAnimateUpdate = true, 100);
  }
  
  hideModalUpdate() {
    this.showModalAnimateUpdate = false;
    setTimeout(() => this.showModalUpdate = false, 300);
  }

  getRepairs() {
    this.loading = true;
    this.carService.repairs(this.route.snapshot.params['id'], (res) => {
      this.data = res;
      this.loading = false;
    });
  }

  updateProgression(form: NgForm) {
    this.carService.updateRepairProgression(
      this.data._id, 
      this.data.repairs[this.updateRepair].name, 
      form.value.progression, 
      () => {
        this.getRepairs();
        this.hideModalUpdate();
    });
  }

  ngOnInit() {
    this.getRepairs();
  }

}
