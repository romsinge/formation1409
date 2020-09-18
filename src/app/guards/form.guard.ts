import { RaceCreateComponent } from './../components/race-create/race-create.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<RaceCreateComponent> {
  
  canDeactivate(component: RaceCreateComponent): boolean {
    return component.raceForm.pristine ? true : confirm('Are you sure?')
  }

}
