import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any>{

  constructor(private usersService: UsersService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | undefined> {
    const userId = +route.params['id'];

    return this.usersService.getUserById(userId)
      .pipe(map(user => {
        if (user) {
          return user;
        } else {
          this.router.navigate(['not-found']);
          return;
        }
      }))
  }

}
