import { AppState } from './../store/app.state';
import { Race } from './../interfaces/race.interface';
import { Poney } from './../interfaces/poney.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/internal/operators'
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  errorMessageSub$: Subject<string> = new Subject()

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.pipe(
      select('metadata'),
      map(m => m.errorMessage)
    ).subscribe(msg => {
      this.errorMessageSub$.next(msg)
      setTimeout(() => {
        this.errorMessageSub$.next('')
      }, 3000)
    })
  }

  get ponies(): Observable<Poney[]> {
    return this.http.get<Poney[]>('http://localhost:3000/ponies')
  }

  get races(): Observable<Race[]> {
    return this.http.get<Race[]>('http://localhost:3000/races')
  }

  getRaceById(id: string): Observable<Race> {
    return this.races.pipe(map((races) => {
      return races.find((race) => {
        return race.id === id
      })
    }))
  }

  saveRace(race: Race): Observable<Race> {
    return this.http.post<Race>('http://localhost:3000/races', race)
  }

  private _ponies: Poney[] = []

  private _races: Race[] = []
}
