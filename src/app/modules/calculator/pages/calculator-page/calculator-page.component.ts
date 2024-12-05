import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.css']
})
export class CalculatorPageComponent {
  displayValue: string = '0';
  private firstOperand: number | null = null;
  private operator: string | null = null;
  private waitingForSecondOperand: boolean = false;

  buttons: string[] = [
    'C', '±', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  onButtonClick(label: string): void {
    const actions: { [key: string]: () => void } = {
      '.': () => this.inputDecimal(),
      'C': () => this.resetCalculator(),
      '±': () => this.toggleSign(),
      '%': () => this.inputPercent(),
      '=': () => this.calculate(),
      '+': () => this.handleOperator(label),
      '-': () => this.handleOperator(label),
      '*': () => this.handleOperator(label),
      '/': () => this.handleOperator(label),
    };
  
    if (!isNaN(Number(label))) {
      this.inputDigit(label);
    } else if (actions[label]) {
      actions[label]();
    } else {
      console.warn(`Botón no reconocido: ${label}`);
    }
  }

  private inputDigit(digit: string): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue =
        this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  private inputDecimal(): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = '0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  private toggleSign(): void {
    if (this.displayValue !== '0') {
      this.displayValue = this.displayValue.startsWith('-')
        ? this.displayValue.substring(1)
        : '-' + this.displayValue;
    }
  }

  private inputPercent(): void {
    const currentValue = parseFloat(this.displayValue);
    if (currentValue === 0) return;

    const fixedDigits = this.displayValue.replace(/^-?\d*\.?/, '');
    const newValue = parseFloat(this.displayValue) / 100;
    this.displayValue = String(newValue.toFixed(fixedDigits.length + 2));
  }

  private handleOperator(nextOperator: string): void {
    const inputValue = parseFloat(this.displayValue);

    if (this.operator && this.waitingForSecondOperand) {
      this.operator = nextOperator;
      return;
    }

    if (this.firstOperand === null) {
      this.firstOperand = inputValue;
    } else if (this.operator) {
      const result = this.performCalculation(this.operator, this.firstOperand, inputValue);
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.operator = nextOperator;
    this.waitingForSecondOperand = true;
  }

  private performCalculation(operator: string, firstOperand: number, secondOperand: number): number {
    switch (operator) {
      case '+': return firstOperand + secondOperand;
      case '-': return firstOperand - secondOperand;
      case '*': return firstOperand * secondOperand;
      case '/': return firstOperand / secondOperand;
      default: return secondOperand;
    }
  }

  private calculate(): void {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = parseFloat(this.displayValue);
      const result = this.performCalculation(this.operator, this.firstOperand, secondOperand);
      this.displayValue = String(result);
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  private resetCalculator(): void {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}
