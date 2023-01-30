import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrator-modify',
  templateUrl: './administrator-modify.component.html',
  styleUrls: ['./administrator-modify.component.scss']
})
export class AdministratorModifyComponent implements OnInit {
  passwordMatch = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(['/administrator']);
  }
}
