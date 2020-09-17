import { initRacesSuccess, addRaceSuccess } from './../actions/race.actions';
import { Race } from './../../interfaces/race.interface';
import { createReducer, on } from "@ngrx/store"
import { deleteRace } from '../actions/race.actions';

const initialState: Race[] = []

const reducer = createReducer(
  initialState,
  on(deleteRace, (state, props) => state.filter((race) => race.id !== props.id)),
  on(initRacesSuccess, (state, props) => props.races),
  on(addRaceSuccess, (state, action) => [...state, action.race] )
)

export function raceReducer(state, action) {
  return reducer(state, action)
}