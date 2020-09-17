import { Race } from './../../interfaces/race.interface';
import { createReducer, on } from "@ngrx/store"
import { deleteRace } from '../actions/race.actions';

const initialState: Race[] = [
  {
    "id": "0",
    "name": "Le Mans",
    "poneyIds": [
      "0",
      "1"
    ]
  },
  {
    "id": "1",
    "name": "Paris",
    "poneyIds": [
      "1",
      "2"
    ]
  },
  {
    "name": "Brest",
    "poneyIds": [
      "0",
      "1",
      "2"
    ],
    "id": "q6M0IOP"
  },
  {
    "name": "Marseille",
    "poneyIds": [
      "0",
      "1",
      "2"
    ],
    "id": "qdYr2iB"
  }
]

const reducer = createReducer(
  initialState,
  on(deleteRace, (state , props) => state.filter((race) => race.id !== props.id))
)

export function raceReducer(state, action) {
  return reducer(state, action)
}