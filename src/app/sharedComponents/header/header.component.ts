import {
  Component,
  HostListener,
  Input,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() headerClass: string = 'home';
  private mobileMenuOpen = false;

  constructor(private router: Router) {}

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
}
