import { Component, Input } from '@angular/core';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';
import { Router } from '@angular/router';
import { MainTemplateData } from 'src/app/sharedComponents/main-template/main-template.model';
@Component({
  selector: 'app-aboutus-banner',
  templateUrl: './aboutus-banner.component.html',
  styleUrls: ['./aboutus-banner.component.css']
})
export class AboutusBannerComponent {
@Input() pageData!: MainTemplateData;

  

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

