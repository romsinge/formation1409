import { DataService } from './../../services/data.service';
import { map, mergeMap } from 'rxjs/operators';
import { initRaces, initRacesSuccess } from './../actions/race.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

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

  constructor(private actions: Actions, private dataService: DataService) {}

}
