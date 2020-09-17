import { Race } from './../interfaces/race.interface';

export interface AppState {
  races: Race[],
  metadata: { errorMessage: string }
}
