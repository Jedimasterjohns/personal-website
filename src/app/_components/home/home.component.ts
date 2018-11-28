  import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import Typed from 'typed.js';
import { GlobalServiceManager } from 'src/app/_services/global-service-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  showScrollPrompter: Observable<boolean>;

  constructor(private globalServiceManager: GlobalServiceManager) {
    this.showScrollPrompter = globalServiceManager.showScrollPrompter;
   }

  ngAfterViewInit() {
    const greetingLine =  'Software developer with a tenacity to increase efficiency and inspire creativity.<br>' +
                          'Jr Developer at Xactware specializing in test driven development and web test automation.<br><br>' +
                          'I build <em>sturdy testing frameworks</em>  and <em>responsive web applications</em>.';
    const typed = new Typed('.intro-text', {
      strings: [greetingLine],
      startDelay: 1500,
      typeSpeed: 10,
      autoInsertCss: true,
      cursorChar: ' |',
      fadeOut: true,
      onComplete: () => { this.globalServiceManager.activateScrollPrompter(); }
    });
  }
}
