import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

@Component({
  selector: 'app-core-administration-platforms',
  templateUrl: './core-administration-platforms.component.html',
  styleUrls: ['./core-administration-platforms.component.css']
})
export class CoreAdministrationPlatformsComponent {


constructor(
  private searchService: GlobalSearchService,
  private router: Router
) {}



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
