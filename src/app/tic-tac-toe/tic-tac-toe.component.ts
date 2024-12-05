import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  gameBoard: string[] = ['', '', '', '', '', '', '', '', ''];
  currentPlayer: string = 'X';
  gameOver: boolean = false;

  cellClick(index: number): void {
    if (this.gameOver || this.gameBoard[index] !== '') {
      return;
    }

    this.gameBoard[index] = this.currentPlayer;

    if (this.checkWinner()) {
      setTimeout(() => {
        alert(`${this.currentPlayer} ha ganado!`);
        this.gameOver = true;
      }, 100);
      return;
    }

    if (!this.gameBoard.includes('')) {
      setTimeout(() => {
        alert('¡Empate!');
        this.gameOver = true;
      }, 100);
      return;
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some((pattern) => {
      return pattern.every(
        (index) => this.gameBoard[index] === this.currentPlayer
      );
    });
  }

  resetGame(): void {
    this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = 'X';
    this.gameOver = false;
  }
}
