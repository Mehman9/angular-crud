import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()


export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.authService.isLogged();
        if (logged) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }


    constructor(
        private authService : AuthService , 
        private router: Router

        ) {}

}

