import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'app-administrator-list',
  templateUrl: './administrator-list.component.html',
  styleUrls: ['./administrator-list.component.scss']
})
export class AdministratorListComponent implements OnInit {

  administrators = [];

  constructor(private administratorService: AdministratorService, private router: Router) { }

  ngOnInit() {
    this.getAdministrators();
  }

  newAdministrator() {
    this.router.navigate(['/administrator-add']);
  }

  deleteAdministrator(id) {
    // console.log(id);
    this.administratorService.delete(id);
  }

  getAdministrators() {
    this.administratorService.fetch((data) => {
      this.administrators = data;
    });
  }

}
