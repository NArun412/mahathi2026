import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerClass: string = 'home';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url === '/home') {
          this.headerClass = 'home';
        } else {
          this.headerClass = 'inner';
        }
      }
    });
  }


  title = 'Mahathi Infotech';


}
