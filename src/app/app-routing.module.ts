import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage',component:HomepageComponent,},
  {path:'calc',component:CalculatorComponent,},
  {path:'tictactoe',component:TicTacToeComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
