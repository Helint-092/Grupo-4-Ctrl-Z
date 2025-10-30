import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HobbiesComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}