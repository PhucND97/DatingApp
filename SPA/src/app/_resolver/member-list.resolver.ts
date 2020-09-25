import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class MemberListResolver implements Resolve<User[]>{
    constructor(private userService: UserService, private alertifyService: AlertifyService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.alertifyService.error('Problem resolving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }

}
