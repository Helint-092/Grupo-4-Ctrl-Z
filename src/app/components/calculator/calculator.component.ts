import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  display = '0';

  appendNumber(value: string): void {
    if (this.display === '0' && value !== '.') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  clear(): void {
    this.display = '0';
  }

  deleteLast(): void {
    this.display = this.display.length > 1 ? this.display.slice(0, -1) : '0';
  }

  calculate(): void {
    try {
      this.display = Function('"use strict"; return (' + this.display + ')')().toString();
    } catch {
      this.display = 'Error';
    }
  }
}