import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToePageComponent } from './pages/tic-tac-toe-page/tic-tac-toe-page.component'

const routes: Routes = [
  {
    path:'',
    component:TicTacToePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
