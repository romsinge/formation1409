import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './interfaces/poney.interface';
import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMBIENT-IT';

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
