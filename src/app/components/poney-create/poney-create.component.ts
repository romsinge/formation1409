import { first, map } from 'rxjs/operators';
import { PoneyService } from './../../services/poney.service';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-poney-create',
  templateUrl: './poney-create.component.html',
  styleUrls: ['./poney-create.component.scss']
})
export class PoneyCreateComponent implements OnInit {

  poneyForm: FormGroup
  errorMessages: any = {
    required: 'Field required',
    minlength: '2 characters required',
    isgif: 'GIF required',
    namenotavailable: 'Name not available'
  }

  constructor(private poneyService: PoneyService) { }

  ngOnInit() {
    this.poneyForm = new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(2) ], [ this.isNameAvailable.bind(this) ]),
      image: new FormControl('', [ Validators.required, this.isGif ])
    })
  }

  isGif(control: FormControl): undefined | ValidationErrors {
    let isGifExp = new RegExp(/.+\.gif$/i)

    return isGifExp.test(control.value) ? undefined : {
      isgif: false
    }
  }  

  isNameAvailable(control: FormControl): Observable<undefined | ValidationErrors> {
    return this.poneyService.entities$.pipe(first(), map((ponies) => {
      return ponies.find(poney => poney.name === control.value) ? {
        namenotavailable: true
      } : undefined
    }))
  }
}
