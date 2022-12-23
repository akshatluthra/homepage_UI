import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fb = faFacebookF;
  tweet = faTwitter;
  linkedIn = faLinkedinIn;
  constructor() { }

  ngOnInit(): void {
  }

}
