import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor(element: ElementRef) {
    console.log('Rainbow directive constructor')

    element.nativeElement.style.backgroundColor = 'silver'
  }

}
