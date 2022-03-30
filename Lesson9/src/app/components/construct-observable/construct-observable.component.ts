import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-construct-observable',
  templateUrl: './construct-observable.component.html',
  styleUrls: ['./construct-observable.component.scss']
})
export class ConstructObservableComponent implements OnInit {

  iterator = 0;

  observable$ = new Observable<number>((subscriber) => {
    console.log('Observable body');

    setInterval(() => {
      subscriber.next(++this.iterator);
    }, 1000);

    setTimeout(() => {
      subscriber.error('Error happened.');
    }, 3000);

    setTimeout(() => {
      subscriber.complete();
    }, 5000);

  });

  subscription: Subscription | undefined;

  constructor() { }

  ngOnInit() {
  }

  subscribe() {
    const observer: Partial<Observer<number>> = {
      next: (x: number) => {
        console.log('Observer got a next value: ' + x)
      },
      // error: (err) => {
      //   console.error('Observer got an error: ' + err)
      // },
      // complete: () => {
      //   console.log('Observer got a complete notification')
      // },
    };

    this.subscription = this.observable$.subscribe(observer);

  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }

}
