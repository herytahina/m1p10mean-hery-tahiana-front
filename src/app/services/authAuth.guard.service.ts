import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.loggedIn) {
            if(this.authService.user.type === 1)
            this.router.navigateByUrl("/car");
            if(this.authService.user.type === 2)
            this.router.navigateByUrl("/reception");
            if(this.authService.user.type===3)
            this.router.navigateByUrl("/payment");
        } else {
            return true;
        }
    }
}