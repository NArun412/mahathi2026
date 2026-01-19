import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css']
})
export class SolutionGridComponent implements AfterViewInit {

  constructor(
    private searchService: GlobalSearchService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  // Top options (tabs)
  @Input() options: { label: string; active?: boolean }[] = [];

  // Grid items (cards/boxes)
  @Input() gridItems: (
    | { type: 'image'; image: string }
    | { type: 'card'; label: string; link?: string; color?: string }
  )[] = [];

  // Optionally emit when an option is selected
  @Output() optionSelected = new EventEmitter<number>();

  // ✅ HTML-safe heading
  safeHeading!: SafeHtml;

  private _heading = '';

  @Input()
  set heading(value: string) {
    this._heading = value || '';
    this.safeHeading = this.sanitizer.bypassSecurityTrustHtml(this._heading);
  }

  get heading(): string {
    return this._heading;
  }

  ngAfterViewInit(): void {
    this.registerPageContent();
  }

  selectOption(idx: number) {
    this.optionSelected.emit(idx);
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
