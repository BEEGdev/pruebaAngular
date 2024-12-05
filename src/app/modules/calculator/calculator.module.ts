import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';


@NgModule({
  declarations: [
    CalculatorPageComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
