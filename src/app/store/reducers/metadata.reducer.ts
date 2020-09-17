import { sendErrorMessage } from './../actions/metadata.actions';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';

const initialState = {
  errorMessage: ''
}

const reducer = createReducer(
  initialState,
  on(sendErrorMessage, (state, props) => { return {...initialState, errorMessage: props.message}})
)

export const metadataReducer = (state, action) => {
  return reducer(state, action)
}