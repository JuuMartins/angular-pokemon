import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreinadoresComponent } from './treinadores/treinadores.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TreinadorDetailComponent }  from './treinador-detail/treinador-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'treinadores', component: TreinadoresComponent },
  { path: 'detail/:id', component: TreinadorDetailComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
