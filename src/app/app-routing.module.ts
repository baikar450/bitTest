import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsComponent } from './ms/ms.component';


const routes: Routes = [
  { path: 'ms', component: MsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
