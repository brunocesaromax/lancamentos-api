import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  // Seletor de atributo, poderia ser também apenas input
  selector: '[appColoredField]'
})
export class ColoredFieldDirective {

  constructor(
    private elementRef: ElementRef, // Dá acesso ao elemento hospedeiro no DOM
    private renderer: Renderer2, // Abstração na manipulação de elementos na DOM
  ) { }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'backgroundColor', 'green');
  }

  @HostListener('blur') withoutFocus() {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'backgroundColor', 'transparent');
  }
}
