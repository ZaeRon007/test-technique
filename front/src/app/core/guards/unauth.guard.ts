import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UnAuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isLoggedOut())
            return true;
        else{
            this.router.navigateByUrl(`/shop`)
            return false;
        }
    }
}