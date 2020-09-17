import { createAction, props } from '@ngrx/store'

export const deleteRace = createAction(
  '[RACE] Delete',
  props<{ id: string }>()
)
