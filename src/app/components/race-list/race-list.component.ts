import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { Race } from './../../interfaces/race.interface';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteRace } from 'src/app/store/actions/race.actions';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private dataService: DataService, private store: Store<AppState>) { }

  ngOnInit() {
    this.races$ = this.store.pipe(select('races'))
  }

  delete(id: string) {
    this.store.dispatch(deleteRace({ id }))
  }

}
