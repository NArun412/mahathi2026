import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
 constructor(private router: Router,    private searchService: GlobalSearchService,) { }

  ngOnInit(): void {
 
    if(this.router.url =="/about/founders"){
      window.scroll(0 ,2500);
    }

  

  }
ngAfterViewInit(): void {
  setTimeout(() => {
    window.scrollTo({
      top: 30, // adjust for 3rd line
      behavior: 'smooth'
    });
  }, 200);
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

      // Create a stable id for scrolling
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
