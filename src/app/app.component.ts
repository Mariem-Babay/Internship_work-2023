import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for development environment
  }
  title = 'project'; 
}
