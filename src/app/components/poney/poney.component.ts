import { Poney } from './../../interfaces/poney.interface';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoneyComponent implements OnInit {

  @Input() poney: Poney
  @Output() win: EventEmitter<Poney> = new EventEmitter()
  intervalId
  winner: boolean = false

  constructor(private cdr: ChangeDetectorRef) {
    console.log('PONEY CONSTRUCTOR')
  }

  ngOnInit() {
    this.run()

    // setTimeout(() => {
    //   this.cdr.detectChanges()
    // }, 5000)
  }
  
  displayName(): void {
    console.log(this.poney.name)
  }
  
  run() {
    this.poney.distance = 0
    
    this.intervalId = setInterval(() => {
      this.poney.distance += Math.floor(Math.random() * 10) + 1
      
      if (this.poney.distance >= 90) {
        this.poney.distance = 90
        this.win.emit(this.poney)
        this.winner = true
      }
    }, 1000)
  }

  stopRunning() {
    clearInterval(this.intervalId)
  }

  ngOnDestroy() {
    this.stopRunning()
  }

}
