import { Poney } from './../interfaces/poney.interface';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @Input('appRainbow') color: string = 'white'
  @Input() isColored: boolean = false
  @Input() poney: Poney

  constructor(private element: ElementRef) {
    console.log('Rainbow directive constructor')
  }
  
  ngOnInit() {
    if (this.isColored) {
      this.element.nativeElement.style.backgroundColor = this.color
    }
  }

  @HostListener('dblclick')
  handleDblclick() {
    console.log('dblclick')
    this.poney.distance += 10
  }

}
