import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/home/pages/home-page/home-page.component';


const routes: Routes = [
  {
    path:'auth',     
    loadChildren:()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'homepage',
    component:HomepageComponent,
    loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'**', 
    redirectTo:'homepage'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
