import { FormGuard } from './guards/form.guard';
import { AuthGuard } from './modules/admin/guards/auth.guard';
import { RaceComponent } from './components/race/race.component';
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const ROUTES: Route[] = [
  {
    path: 'race-list',
    component: RaceListComponent
  },
  {
    path: 'race-create',
    component: RaceCreateComponent,
    canDeactivate: [ FormGuard ]
  },
  {
    path: 'poney-create',
    component: PoneyCreateComponent
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [ AuthGuard ]
  },
  {
    path: '**',
    redirectTo: 'race-list'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
