import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';


@Injectable()
export class MemberEditResolver implements Resolve<User>{

    constructor(
        private userSerivce: UserService,
        private authService: AuthService,
        private alertifyService: AlertifyService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userSerivce.getUser(+this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertifyService.error('Problem loading user data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
