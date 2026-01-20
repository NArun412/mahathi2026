import {
  Component,
  AfterViewInit,
  NgZone,
  OnDestroy
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from './global-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  headerClass: string = 'home';
  title = 'Mahathi Infotech';

  /* ================= SMOOTH SCROLL STATE ================= */

  private currentScroll = 0;
  private targetScroll = 0;
  private velocity = 0;
  private animationFrameId: number | null = null;

  private readonly EASING = 0.08;
  private readonly VELOCITY_DAMP = 0.82;

  constructor(
    private router: Router,
    private searchService: GlobalSearchService,
    private zone: NgZone
  ) {
    // ✅ PREVENT BROWSER SCROLL RESTORE (CRITICAL)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        // ✅ LOAD DIRECTLY AT TOP (NO MID FLASH)
        this.currentScroll = 0;
        this.targetScroll = 0;
        this.velocity = 0;

        window.scrollTo(0, 0);

        // Header logic
        if (event.url === '/' || event.url === '/home') {
          this.headerClass = 'home';
        } else {
          this.headerClass = 'inner';
        }
      }
    });
  }

  /* ================= LIFECYCLE ================= */

  ngAfterViewInit(): void {
    this.registerPageContent();
    this.initEnhancedSmoothScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('wheel', this.onWheel);
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  /* ================= GLOBAL SEARCH ================= */

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

  /* ================= ENHANCED SMOOTH SCROLL ================= */

  private initEnhancedSmoothScroll(): void {
    this.currentScroll = 0;
    this.targetScroll = 0;

    this.zone.runOutsideAngular(() => {
      window.addEventListener('wheel', this.onWheel, { passive: false });
      this.animate();
    });
  }

  private onWheel = (event: WheelEvent) => {
    event.preventDefault();

    this.targetScroll += event.deltaY;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    this.targetScroll = Math.max(0, Math.min(this.targetScroll, maxScroll));

    this.velocity += event.deltaY * 0.002;
  };

  private animate = () => {
    this.currentScroll +=
      (this.targetScroll - this.currentScroll) * this.EASING;

    this.velocity *= this.VELOCITY_DAMP;

    window.scrollTo(0, this.currentScroll);

    this.applyVisualEffects();

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  /* ================= VISUAL EFFECTS ================= */

  private applyVisualEffects(): void {
    const v = Math.min(Math.abs(this.velocity), 1);

    document.documentElement.style.setProperty(
      '--scroll-scale',
      `${1 - v * 0.02}`
    );
    document.documentElement.style.setProperty(
      '--scroll-blur',
      `${v * 3}px`
    );
    document.documentElement.style.setProperty(
      '--scroll-glow',
      `${v * 0.25}`
    );
  }
}
