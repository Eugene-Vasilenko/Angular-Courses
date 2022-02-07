import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { User } from '../models/user';


function log(target: Object, key: string, descriptor: PropertyDescriptor) {

  var originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    let logString = key + "(" + args.map(i => JSON.stringify(i)).join(", ") + ")";

    let result = originalMethod.apply(this, args);

    logString += "=> " + result;

    console.log(logString);

    return result;
  };

  return descriptor;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  user!: User;

  @Output()
  sayHelloToOther: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild("nameRef")
  nameControlRef: ElementRef | undefined;

  constructor() { }


  @log
  ngOnChanges(changes: SimpleChanges): void {
  }

  @log
  ngOnInit() {
  }

  @log
  ngDoCheck(): void {
  }

  @log
  ngAfterContentInit(): void {
  }

  @log
  ngAfterContentChecked(): void {
  }

  @log
  ngAfterViewInit(): void {
  }

  @log
  ngAfterViewChecked(): void {
  }

  @log
  ngOnDestroy(): void {
  }

  sayHello() {
    this.sayHelloToOther.emit(this.user.name);
  }


  checkRef() {
    this.nameControlRef?.nativeElement.focus();
  }

  sendMessage(message: string) {
    console.log(this.user.name + ' received message: \n' + message);
  }

}
