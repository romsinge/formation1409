import { addRace } from './../../store/actions/race.actions';
import { AppState } from './../../store/app.state';
import { Race } from './../../interfaces/race.interface';
import { DataService } from './../../services/data.service';
import { Poney } from './../../interfaces/poney.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>
  race: Race = {
    name: '',
    poneyIds: []
  }

  constructor(private dataService: DataService, private store: Store<AppState>) { }

  ngOnInit() {
    this.ponies$ = this.dataService.ponies
  }

  handleSubmit() {
    this.store.dispatch(addRace({ race: this.race }))
  }
}
