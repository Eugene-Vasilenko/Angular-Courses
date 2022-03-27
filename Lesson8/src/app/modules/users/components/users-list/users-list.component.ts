import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/users/models/user';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  showDetails(user: User) {
    this.router.navigate(['/users', user.id]);
  }

}
