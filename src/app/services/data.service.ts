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
}
