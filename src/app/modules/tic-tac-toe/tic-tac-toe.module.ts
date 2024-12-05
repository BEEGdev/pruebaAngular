import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CellComponent } from './components/cell/cell.component';
import { TicTacToePageComponent } from './pages/tic-tac-toe-page/tic-tac-toe-page.component';


@NgModule({
  declarations: [
    GameBoardComponent,
    CellComponent,
    TicTacToePageComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
