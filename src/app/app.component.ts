import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'M1 P10 MEAN';

  constructor(private router: Router, private authService: AuthService) {
    const user = sessionStorage.getItem('user');
    if(user) {
      authService.loggedIn = true;
      authService.user = JSON.parse(user);
    } else {
      router.navigateByUrl('/authentication/login');
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }
}
