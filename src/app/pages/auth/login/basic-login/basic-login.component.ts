import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  incorrectData = false;
  emailError = false;
  passwordError = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  
  submitForm(form: NgForm) {
    this.authService.login(form.value.email, form.value.password, (res) => {
      if(res.message)
        this.incorrectData = true;
      else
        sessionStorage.setItem('user', JSON.stringify(res));
        // const user = JSON.parse(sessionStorage.getItem("userDetails"));
        console.log(JSON.parse(sessionStorage.getItem('user')));

        this.router.navigateByUrl('/'); 
    });
  }

  checkError(form: NgForm) {
    // sessionStorage.clear();
    // console.log(sessionStorage);
    if(form.value.email == '') {
       this.emailError = true;
    } else this.emailError = false;
    if(form.value.password == '') {
      this.passwordError = true;
    } else this.passwordError = false;

    if(!this.emailError && !this.passwordError) this.submitForm(form);
  }
}
