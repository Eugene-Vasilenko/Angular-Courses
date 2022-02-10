import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  @HostBinding('style')
  ownStyle = {};

  @Input()
  appCustomStyle!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // elementRef.nativeElement.style['background-color'] = 'green';

  }

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
  }

  @HostListener('mouseenter')
  onMouseEnter(target: any) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.ownStyle = {
      'color': this.appCustomStyle
    };
  }

  @HostListener('mouseleave')
  onMouseLeave(target: any) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', null);
    this.ownStyle = {};
  }

}
