import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

export interface GridSpan {
  colSpan?: number;
  rowSpan?: number;
}

export type DashboardGridItem =
  | ({ type: 'image'; image: string } & GridSpan)
  | ({ type: 'card'; label: string; link?: string; color?: string } & GridSpan);

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css']
})
export class SolutionGridComponent {

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


  // Top options (tabs)
  @Input() options: { label: string, active?: boolean }[] = [];
  // Heading below the options
  @Input() heading: string = '';
  // Grid items (cards/boxes)
  @Input() gridItems: DashboardGridItem[] = [];
  // Optionally emit when an option is selected
  @Output() optionSelected = new EventEmitter<number>();

  selectOption(idx: number) {
    this.optionSelected.emit(idx);
  }
}
