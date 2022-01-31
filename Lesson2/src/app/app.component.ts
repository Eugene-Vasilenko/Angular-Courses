import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lesson2';

  listOfStrings = ['First', 'Second', 'Third'];

  showDiv = false;

  handleClick() {
    this.showDiv = !this.showDiv;
  }
}
