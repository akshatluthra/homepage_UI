import { Component } from '@angular/core';
import {faGlobeAmericas, faCalendarAlt, faPenSquare, faArrowRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage_UI';
  globe = faGlobeAmericas;
  calendar = faCalendarAlt;
  edit = faPenSquare;
  arrow = faArrowRight;
}
