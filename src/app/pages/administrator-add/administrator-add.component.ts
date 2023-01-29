import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'app-administrator-add',
  templateUrl: './administrator-add.component.html',
  styleUrls: ['./administrator-add.component.scss']
})
export class AdministratorAddComponent implements OnInit {
  loading = false;
  lastNameError = false;
  firstNameError = false;
  emailError = false;
  contactError = false;
  passwordError = false;
  confirmPasswordError = false;
  passwordMatch = true;

  constructor(private administratorService: AdministratorService, private router: Router) { }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(['/administrator']);
  }

  checkError(form: NgForm) {
    (form.value.lastName == "") ? this.lastNameError = true : this.lastNameError = false;
    (form.value.firstName == "") ? this.firstNameError = true : this.firstNameError = false;
    (form.value.email == "") ? this.emailError = true : this.emailError = false;
    (form.value.contact == "") ? this.contactError = true : this.contactError = false;
    (form.value.password == "") ? this.passwordError = true : this.passwordError = false;
    (form.value.confirmPassword == "") ? this.confirmPasswordError = true : this.confirmPasswordError = false;
    if(form.value.password != "" && form.value.confirmPassword == form.value.password) {
      this.passwordMatch = true;
      this.passwordError = false;
      this.confirmPasswordError = false;
    } else {
      (form.value.password != "") ? this.passwordMatch = false : this.passwordMatch = true;
      this.passwordError = true;
      this.confirmPasswordError = true;
    }

    if(!this.lastNameError && !this.firstNameError && !this.emailError && !this.contactError && !this.passwordError && !this.confirmPasswordError && this.passwordMatch) {
      this.submitForm(form);
    }
  }

  submitForm(form: NgForm) {
    this.loading = true;
    delete form.value.confirmPassword;
    this.administratorService.add(form.value, (res) => {
      this.loading = false;
      this.router.navigateByUrl('/administrator');
    })
  }

}
