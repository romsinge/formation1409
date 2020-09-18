import { PoneyService } from './../../services/poney.service';
import { addRace } from './../../store/actions/race.actions';
import { AppState } from './../../store/app.state';
import { Race } from './../../interfaces/race.interface';
import { DataService } from './../../services/data.service';
import { Poney } from './../../interfaces/poney.interface';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

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
  @ViewChild('raceForm') raceForm: FormGroup

  constructor(private dataService: DataService, private store: Store<AppState>, private poneyService: PoneyService) { }

  ngOnInit() {
    this.ponies$ = this.poneyService.entities$
  }

  handleSubmit() {
    this.store.dispatch(addRace({ race: this.race }))
  }
}
