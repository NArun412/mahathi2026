import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private mobileMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.initializeMenu();
  }

  ngAfterViewInit(): void {
    this.closeMenu(); 
  }

  @HostListener('window:resize')
  onResize(): void {
    // Close menu on resize
    this.closeMenu();
    this.mobileMenuOpen = false;
  }

  /**
   * Toggle mobile menu when hamburger is clicked
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const menu = document.getElementById('navbarNavDropdown');
    
    if (this.mobileMenuOpen) {
      if (menu) menu.classList.add('show');
    } else {
      if (menu) menu.classList.remove('show');
    }
  }

  private initializeMenu(): void {
    // Ensure menu is closed on component initialization
    const menu = document.getElementById('navbarNavDropdown');
    if (menu) {
      menu.classList.remove('show');
    }
    this.mobileMenuOpen = false;
  }

  public closeMenu(): void {
    const menu = document.getElementById('navbarNavDropdown');
    if (menu) {
      menu.classList.remove('show');
    }
    this.mobileMenuOpen = false;
  }

  closeMegaMenu(menuElement: HTMLElement) {
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
}