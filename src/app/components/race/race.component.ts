import { DataService } from './../../services/data.service';
import { Race } from './../../interfaces/race.interface';
import { PoneyComponent } from './../poney/poney.component';
import { Poney } from './../../interfaces/poney.interface';
import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  raceInput: Race
  
  ponies: Array<Poney> = []

  @ViewChildren('poneyChildren') poneyChildren: QueryList<PoneyComponent>

  handleWin(poney: Poney) {
    console.log('WINNER : ', poney.name)
    this.poneyChildren.forEach((poneyComponent: PoneyComponent) => {
      poneyComponent.stopRunning()
    })
  }

  ngOnInit() {
    this.ponies = this.dataService.ponies

    // this.route.params.toPromise().then(() => {
    //   (params) => {
    //     console.log(params)
    //   }
    // })
    
    this.route.params.subscribe({
      next: (params) => {
        console.log(params)
      }
    })
  }

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

}
