import {
  Component,
  HostListener,
  Input,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  


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

  @Input() headerClass: string = 'home';
  private mobileMenuOpen = false;

  searchResults: GlobalSearchItem[] = [];
  private searchTimer: any;
  constructor(private router: Router,    private searchService: GlobalSearchService) {}

  /* ---------------- INIT ---------------- */

  ngOnInit(): void {
    this.initializeMenu();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects || event.url;
        this.headerClass = url === '/' ? 'home' : 'inner';
      }
    });
  }

  ngAfterViewInit(): void {
    this.closeMenu();
      this.registerPageContent();

  }

  /* ---------------- RESPONSIVE ---------------- */

  @HostListener('window:resize')
  onResize(): void {
    this.closeMenu();
    this.mobileMenuOpen = false;
  }

  /* ---------------- MENU ---------------- */

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const menu = document.getElementById('navbarNavDropdown');
    if (menu) {
      menu.classList.toggle('show', this.mobileMenuOpen);
    }
  }

  private initializeMenu(): void {
    const menu = document.getElementById('navbarNavDropdown');
    if (menu) menu.classList.remove('show');
    this.mobileMenuOpen = false;
  }

  public closeMenu(): void {
    const menu = document.getElementById('navbarNavDropdown');
    if (menu) menu.classList.remove('show');
    this.mobileMenuOpen = false;
  }

  /* ---------------- MEGA MENU ---------------- */

  closeMegaMenu(menuElement: HTMLElement): void {
    if (!menuElement) return;

    menuElement.classList.remove('show');

    const dropdownMenu = menuElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('show');
      dropdownMenu.classList.add('force-hide');
      setTimeout(() => {
        dropdownMenu.classList.remove('force-hide');
      }, 300);
    }
  }

  /* ---------------- CTRL + F SEARCH (NO UI CHANGE) ---------------- */

  /**
   * Called on form submit (Enter key or search icon)
   */
  handleSearch(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const value = input?.value?.trim().toLowerCase();

    if (!value) return;

    let found = false;

    // CTRL+F style: scan all visible leaf nodes
    $('body')
      .find('*')
      .each((index: number, element: HTMLElement) => {
        if (found) return;

        const el = $(element);

        if (
          el.children().length === 0 &&
          el.text().toLowerCase().includes(value)
        ) {
          found = true;

          $('html, body').animate(
            { scrollTop: el.offset().top - 80 },
            400
          );

          el.addClass('search-highlight');
          setTimeout(() => el.removeClass('search-highlight'), 1500);
        }
      });

    // If not found on current page → redirect and retry
    if (!found) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.retrySearch(value), 500);
      });
    }

    // Close search UI
    $('#page-header-search').collapse('hide');
  }

  private retrySearch(value: string): void {
    $('body')
      .find('*')
      .each((index: number, element: HTMLElement) => {
        const el = $(element);

        if (
          el.children().length === 0 &&
          el.text().toLowerCase().includes(value)
        ) {
          $('html, body').animate(
            { scrollTop: el.offset().top - 80 },
            400
          );

          el.addClass('search-highlight');
          setTimeout(() => el.removeClass('search-highlight'), 1500);
        }
      });
  }
 onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    clearTimeout(this.searchTimer);

    if (!value) {
      this.searchResults = [];
      return;
    }

    // Debounced global search
    this.searchTimer = setTimeout(() => {
      this.searchResults = this.searchService
        .search(value)
        .slice(0, 8); // limit results
    }, 200);
  }

  onResultClick(item: GlobalSearchItem): void {
    this.searchResults = [];

    this.router.navigate([item.route]).then(() => {
      setTimeout(() => {
        const el = document.getElementById(item.elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          el.classList.add('search-highlight');
          setTimeout(() => {
            el.classList.remove('search-highlight');
          }, 1500);
        }
      }, 300);
    });
  }
}
