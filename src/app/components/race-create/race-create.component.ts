import { DataService } from './../../services/data.service';
import { Poney } from './../../interfaces/poney.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  ponies$: Observable<Poney[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ponies$ = this.dataService.ponies
  }

  handleSubmit() {
    console.log('SUBMIT')
  }
}
