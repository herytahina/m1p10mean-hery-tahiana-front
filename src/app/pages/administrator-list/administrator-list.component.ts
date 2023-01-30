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

  toModify() {
    this.router.navigate(['/administrator-modify']);
  }

  newAdministrator() {
    this.router.navigate(['/administrator-add']);
  }

  deleteAdministrator(id) {
    this.administratorService.delete(id);
    location.reload();
    // console.log(this.administrators);
  }

  getAdministrators() {
    this.administratorService.fetch((data) => {
      this.administrators = data;
    });
  }

}
