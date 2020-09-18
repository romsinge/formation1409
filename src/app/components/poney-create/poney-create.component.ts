import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('hbgfrwe', [ Validators.required, Validators.minLength(2) ]),
      image: new FormControl('', [ Validators.required ])
    })
  }

}
