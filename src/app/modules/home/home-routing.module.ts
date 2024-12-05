import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tictactoe',
    loadChildren:()=> import('../tic-tac-toe/tic-tac-toe.module').then(m=>m.TicTacToeModule),
  },
  {
    path:'calc',
    loadChildren:()=> import('../calculator/calculator.module').then(m=>m.CalculatorModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
