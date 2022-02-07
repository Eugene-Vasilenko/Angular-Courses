import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from './models/user';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  usersIndexer = 0;
  users: User[] = [
    {
      id: this.usersIndexer++,
      name: "Tom",
      age: 22
    },
    // {
    //   id: this.usersIndexer++,
    //   name: "Cat",
    //   age: 27,
    //   description: 'Some description'
    // },
    // {
    //   id: this.usersIndexer++,
    //   name: "Jim",
    //   age: 23
    // }
  ];

  @ViewChildren(UserComponent)
  userComponentRefs: QueryList<ElementRef> | undefined;


  receiveHello(userName: string) {
    console.log('Hello from: ' + userName);
  }


  checkUserRefs() {
    (this.userComponentRefs?.get(1) as any as UserComponent).sendMessage('some message');


    // this.userComponentRefs?.forEach(userComponentRef => {

    //   (userComponentRef as any as UserComponent).sendMessage('some message');

    // });
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.users[0] = { id: this.usersIndexer++, name: 'new name', age: 33 };
    }, 5000);
  }


}
