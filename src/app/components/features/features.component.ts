import { Component, OnInit } from '@angular/core';
import { faBullseye, faLaptop, faMobileAlt, faChalkboardTeacher, faFlag, faSmile, faClipboardList, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  target = faBullseye
  laptop = faLaptop
  mobile = faMobileAlt
  chalkboard = faChalkboardTeacher
  flag = faFlag
  smile = faSmile
  clipboard = faClipboardList
  eye = faEye
  constructor() { }

  ngOnInit(): void {
  }

}
