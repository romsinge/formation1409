import { sendErrorMessage } from './../actions/metadata.actions';
import { DataService } from './../../services/data.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { initRaces, initRacesSuccess, addRace, addRaceSuccess } from './../actions/race.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class RaceEffects {

  initRaces = createEffect(() => {
    return this.actions.pipe(
      ofType(initRaces),
      mergeMap(() => {
        return this.dataService.races.pipe(map(races => {
          return initRacesSuccess({ races })
        })).pipe(catchError((err) => {
          return of(sendErrorMessage({ message: err.message }))
        }))
      })
    )
  })

  addRace = createEffect(() => {
    return this.actions.pipe(
      ofType(addRace),
      mergeMap((action) => {
        return this.dataService.saveRace(action.race).pipe(map(race => {
          this.router.navigateByUrl('/race-list')
          return addRaceSuccess({ race })
        }))
      })
    )
  })

  constructor(private actions: Actions, private dataService: DataService, private router: Router) {}

}
