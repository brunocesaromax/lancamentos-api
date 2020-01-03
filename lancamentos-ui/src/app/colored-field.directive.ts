import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  // Seletor de atributo, poderia ser também apenas input
  selector: '[appColoredField]'
})
export class ColoredFieldDirective {

  @Input() color = 'gray';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
  }

  @HostListener('focus') onFocus() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'backgroundColor', 'green');
    this.backgroundColor = this.color;
  }

  @HostListener('blur') withoutFocus() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
