import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  // Seletor de atributo, poderia ser também apenas input
  selector: '[appColoredField]'
})
export class ColoredFieldDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
  ) { }

  @HostListener('focus') onFocus() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'backgroundColor', 'green');
    this.backgroundColor = 'yellow';
  }

  @HostListener('blur') withoutFocus() {
    // this.renderer.setStyle(this.elementRef.nativeElement,
    //   'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
