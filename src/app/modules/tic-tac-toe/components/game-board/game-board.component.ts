import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  cells: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;

  makeMove(index: number): void {
    if (!this.cells[index] && !this.winner) {
      this.cells[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some(combination =>
      combination.every(index => this.cells[index] === this.currentPlayer)
    );
  }

  isDraw(): boolean {
    return !this.winner && this.cells.every(cell => cell !== '');
  }

  resetGame(): void {
    this.cells = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
