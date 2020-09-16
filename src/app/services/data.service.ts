import { Race } from './../interfaces/race.interface';
import { Poney } from './../interfaces/poney.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get ponies(): Poney[] {
    return this._ponies
  }

  get races(): Race[] {
    return this._races
  }

  getRaceById(id: string): Race {
    return this._races.find((race) => {
      return race.id === id
    })
  }

  private _ponies: Poney[] = [
    {
      "id": "0",
      "name": "Romain",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      "id": "1",
      "name": "Idris",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      "id": "2",
      "name": "Ichrak",
      "image": "https://ng-ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    }
  ]

  private _races: Race[] = [
    {
      "id": "0",
      "name": "Le Mans",
      "poneyIds": ["0", "1"]
    },
    {
      "id": "1",
      "name": "Paris",
      "poneyIds": ["1", "2"]
    }
  ]
}
