import { Component, ViewEncapsulation } from '@angular/core';
import { JorgeMartinezComponent } from "./jorge-martinez/jorge-martinez.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // <- importante
  ,
  imports: [JorgeMartinezComponent]
})
export class AppComponent {}
