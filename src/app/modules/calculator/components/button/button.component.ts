import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Output() clicked = new EventEmitter<string>();

  onClick(): void {
    this.clicked.emit(this.label);
  }

  getClass(): string {
    if (this.label === 'C') {
      return 'button function';
    } else if (this.label === '=' || this.label === '+' || this.label === '-' || this.label === '*' || this.label === '/') {
      return 'button operator';
    } else {
      return 'button';
    }
  }
}
