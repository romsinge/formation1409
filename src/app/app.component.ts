import { Race } from './interfaces/race.interface';
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

  races: Race[] = []
}
