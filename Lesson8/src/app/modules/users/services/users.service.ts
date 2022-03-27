import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersIndexer = 0;

  users: User[] = [
    {
      id: this.usersIndexer++,
      name: 'Tom',
      age: 20,
      email: 'tom@mail.com'
    },
    {
      id: this.usersIndexer++,
      name: 'Jim',
      age: 22,
      email: 'jim@mail.com'
    },
    {
      id: this.usersIndexer++,
      name: 'Cate',
      age: 24,
      email: 'cate@mail.com'
    },
    {
      id: this.usersIndexer++,
      name: 'George',
      age: 26,
      email: 'george@mail.com'
    },
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(i => i.id === id);
    return of(user);
  }

}
