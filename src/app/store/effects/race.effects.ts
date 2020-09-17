import { DataService } from './../../services/data.service';
import { map, mergeMap } from 'rxjs/operators';
import { initRaces, initRacesSuccess, addRace, addRaceSuccess } from './../actions/race.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Injectable()
export class RaceEffects {

  initRaces = createEffect(() => {
    return this.actions.pipe(
      ofType(initRaces),
      mergeMap(() => {
        return this.dataService.races.pipe(map(races => {
          return initRacesSuccess({ races })
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
