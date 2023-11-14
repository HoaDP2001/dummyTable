import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  /**
   *
   * @param type 1 is product app, 2 is weather app
   */
  navigateTo(type: number) {
    switch (type) {
      case 1: {
        this.router.navigate(['/products-app']);
        break;
      }
      case 2: {
        this.router.navigate(['/weather-app']);
        break;
      }
    }
  }
}
