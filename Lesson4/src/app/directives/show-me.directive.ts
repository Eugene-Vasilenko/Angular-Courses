import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMe]'
})
export class ShowMeDirective implements OnChanges {

  @Input()
  appShowMe!: boolean;

  constructor(private templateRef: TemplateRef<any>, private viewContainerref: ViewContainerRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const appShowMeSimpleChange = changes['appShowMe'];

    if (appShowMeSimpleChange.currentValue != appShowMeSimpleChange.previousValue) {
      if (this.appShowMe) {
        this.viewContainerref.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerref.clear();
      }
    }
  }

}
