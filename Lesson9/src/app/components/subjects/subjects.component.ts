import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  iterator = 0;

  subject = new ReplaySubject<number>(3);

  constructor() { }

  ngOnInit() {
  }

  subscribe() {
    this.subject.subscribe(value => {
      console.log('Next: ' + value);
    })
  }

  next() {
    this.subject.next(++this.iterator);
  }

}
