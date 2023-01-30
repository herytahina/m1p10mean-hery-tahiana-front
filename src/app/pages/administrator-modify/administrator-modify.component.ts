import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'app-administrator-modify',
  templateUrl: './administrator-modify.component.html',
  styleUrls: ['./administrator-modify.component.scss']
})
export class AdministratorModifyComponent implements OnInit {
  admin = {};

  loading = false;

  lastNameError = false;
  firstNameError = false;
  emailError = false;
  contactError = false;
  passwordError = false;

  constructor(private administratorService: AdministratorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAdministrator(this.route.snapshot.params['id']);
  }

  backToList() {
    this.router.navigate(['/administrator']);
  }

  checkError(form: NgForm) {
    // (form.value.lastName == "") ? this.lastNameError = true : this.lastNameError = false;
    (form.value.lastName == "") ? console.log(form.value.lastName) : this.lastNameError = false;
    (form.value.firstName == "") ? this.firstNameError = true : this.firstNameError = false;
    (form.value.email == "") ? this.emailError = true : this.emailError = false;
    (form.value.contact == "") ? this.contactError = true : this.contactError = false;
    // (form.value.password == "") ? this.passwordError = true : this.passwordError = false;

    if(!this.lastNameError && !this.firstNameError && !this.emailError && !this.contactError && !this.passwordError) {
      this.submitForm(form);
    }
  }

  submitForm(form: NgForm) {
    this.loading = true;
    if(form.value.password == '') delete form.value.password;
    this.administratorService.update(this.route.snapshot.params.id, form.value, () => {
        this.loading = false;
        this.router.navigateByUrl('/administrator');
    })
  }

  getAdministrator(id) {
    this.administratorService.fetchOne(id, (data) => {
      this.admin = data;
      // console.log(data);
    })
  }
}
