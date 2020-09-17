import { Race } from './../interfaces/race.interface';
import { EntityDataModuleConfig } from '@ngrx/data'

export interface AppState {
  races: Race[],
  metadata: { errorMessage: string }
}

export const entityConfig: EntityDataModuleConfig = {
  'entityMetadata': {
    Ponies: {}
  },
  'pluralNames': {
    Ponies: 'Ponies'
  }
}
