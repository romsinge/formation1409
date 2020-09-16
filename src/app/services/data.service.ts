import { Race } from './../interfaces/race.interface';
import { Poney } from './../interfaces/poney.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>('http://localhost:3000/ponies')
  }

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>('http://localhost:3000/races')
  }

  getRaceById(id: string): Race {
    return this._races.find((race) => {
      return race.id === id
    })
  }

  private _ponies: Poney[] = []

  private _races: Race[] = []
}
