import { Race } from './../../interfaces/race.interface';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  races: Race[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.races = this.dataService.races
  }

}
