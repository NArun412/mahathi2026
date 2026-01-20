import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GlobalSearchItem, GlobalSearchService } from './global-search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerClass: string = 'home';
  constructor(private router: Router,  private searchService: GlobalSearchService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // 👈 always scroll to top
      }
    });
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


ngAfterViewInit(): void {
  this.registerPageContent();
}



private registerPageContent(): void {
  const items: GlobalSearchItem[] = [];

  const elements = Array.from(
    document.querySelectorAll('h1, h2, h3, p, li')
  );

  elements.forEach((el: Element, index: number) => {
    const text = el.textContent?.trim();
    if (!text) return;

    const id = `search-${this.router.url.replace(/\//g, '')}-${index}`;
    el.setAttribute('id', id);

    items.push({
      text,
      route: this.router.url,
      elementId: id
    });
  });

  this.searchService.register(items);
}

}
