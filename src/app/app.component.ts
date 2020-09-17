import { PoneyService } from './services/poney.service';
import { DataService } from './services/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Race } from './interfaces/race.interface';
import { PoneyComponent } from './components/poney/poney.component';
import { Poney } from './interfaces/poney.interface';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { initRaces } from './store/actions/race.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMBIENT-IT';

  races: Race[] = []
  errorMessage$: Observable<string>

  ngOnInit() {
    this.store.dispatch(initRaces())
    this.errorMessage$ = this.dataService.errorMessageSub$

    this.poneyService.getAll()
  }

  constructor(private store: Store<AppState>, private dataService: DataService, private poneyService: PoneyService) {}
}
