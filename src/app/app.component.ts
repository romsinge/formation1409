import { AppState } from './store/app.state';
import { Race } from './interfaces/race.interface';
import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './interfaces/poney.interface';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { initRaces } from './store/actions/race.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMBIENT-IT';

  races: Race[] = []

  ngOnInit() {
    this.store.dispatch(initRaces())
  }

  constructor(private store: Store<AppState>) {}
}
