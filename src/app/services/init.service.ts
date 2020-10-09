import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() { }

  init() {
    console.log('INIT SERVICE')
  }
}
