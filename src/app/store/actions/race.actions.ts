import { Race } from './../../interfaces/race.interface';
import { createAction, props } from '@ngrx/store'

export const deleteRace = createAction(
  '[RACE] Delete',
  props<{ id: string }>()
)

export const initRaces = createAction(
  '[RACE] Init'
)

export const initRacesSuccess = createAction(
  '[RACE] Init Success',
  props<{ races: Race[] }>()
)