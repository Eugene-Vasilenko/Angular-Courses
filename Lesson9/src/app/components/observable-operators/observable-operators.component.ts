import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, from, generate, map, Observable, of, scan } from 'rxjs';

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  styleUrls: ['./observable-operators.component.scss']
})
export class ObservableOperatorsComponent implements OnInit {

  observable$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
  // observable$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  // observable$ = generate(0, x => {
  //   return x < 10;
  // }, x => {
  //   return x + 2;
  // }, x => x);



  iterator1 = 0;
  iterator2 = 10;

  // observable1$ = new Observable<number>((subscriber) => {
  //   console.log('Observable body');

  //   setInterval(() => {
  //     subscriber.next(++this.iterator1);
  //   }, 1000);

  //   setTimeout(() => {
  //     subscriber.complete();
  //   }, 5000);

  // });



  // observable2$ = new Observable<number>((subscriber) => {
  //   console.log('Observable body');

  //   setInterval(() => {
  //     subscriber.next(--this.iterator2);
  //   }, 1500);

  //   setTimeout(() => {
  //     subscriber.complete();
  //   }, 5000);

  // });

  constructor() { }

  ngOnInit() {
    // this.observable$.subscribe(v => {
    //   console.log('Next: ' + v);
    // });

    // combineLatest([this.observable1$, this.observable2$])
    //   .subscribe(value => {
    //     console.log(value)
    //   });

    // forkJoin({
    //   first: this.observable1$,
    //   second: this.observable2$
    // })
    //   .subscribe(value => {
    //     console.log('forkJoin:', value)
    //   });



    this.observable$
      .pipe(
        map(value => ({ value })),
        scan((total, n) => total + n.value, 0)
      )
      .subscribe(v => {
        console.log('Next: ', v);
      });
  }

}
