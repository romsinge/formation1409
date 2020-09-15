import { Race } from './../../interfaces/race.interface';
import { PoneyComponent } from './../poney/poney.component';
import { Poney } from './../../interfaces/poney.interface';
import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  @Input() raceInput: Race
  
  ponies: Array<Poney> = [
    {
      "id": "0",
      "name": "Romain",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      "id": "1",
      "name": "Idris",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      "id": "2",
      "name": "Ichrak",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    }
  ]

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
    this.poneyChildren.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

}
