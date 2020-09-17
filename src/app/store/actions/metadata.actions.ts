import { props, createAction } from '@ngrx/store';

export const sendErrorMessage = createAction(
  '[ERROR] Message',
  props<{ message: string }>()
)