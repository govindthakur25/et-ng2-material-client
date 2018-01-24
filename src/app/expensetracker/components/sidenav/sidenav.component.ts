import { Component, OnInit } from '@angular/core';

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = 
          matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px)`);

  constructor() { 
    this.mediaMatcher.addListener(m => this.mediaMatcher = m);
  }

  ngOnInit() {
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }

}
