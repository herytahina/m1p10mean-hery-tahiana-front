import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  loading = false;
  lastNameReq = false;
  firstNameReq = false;
  emailReq = false;
  contactReq = false;
  passwordReq = false;
  passwordMatch = false;
  emailTaken = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.lastNameReq = false;
    this.firstNameReq = false;
    this.emailReq = false;
    this.contactReq = false;
    this.passwordReq = false;
    this.passwordMatch = false;
    
    if(form.valid) {
      if(form.value.password === form.value.confirmPassword) {
        delete form.value.confirmPassword;
        this.authService.register(form.value, (res) => {
          this.loading = false;
          if(res.message)
            this.emailTaken = true;
          else {
            this.router.navigateByUrl('/');
          }
        });
      } else {
        this.passwordMatch = true;
      }
    } else {
      if(form.value.lastName === '')
        this.lastNameReq = true;
      if(form.value.firstName === '')
        this.firstNameReq = true;
      if(form.value.email === '')
        this.emailReq = true;
      if(form.value.contact === '')
        this.contactReq = true;
      if(form.value.password === '')
        this.passwordReq = true;
      if(form.value.confirmPassword === '')
        this.passwordMatch = true;
    }
  }

}
