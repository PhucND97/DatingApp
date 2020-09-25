import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable()
export class MemberDetailResolver implements Resolve<User[]>{
    constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUser(+route.paramMap.get('id')).pipe(
            catchError(error => {
                this.alertifyService.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
