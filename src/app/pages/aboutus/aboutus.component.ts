import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';
import { MainTemplateData } from 'src/app/sharedComponents/main-template/main-template.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private searchService: GlobalSearchService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.registerPageContent();

    const cards = document.querySelectorAll<HTMLElement>('.founder-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    cards.forEach((card, index) => {
      /* Faster stagger, elegant rhythm */
      card.style.transitionDelay = `${index * 35}ms`;
      observer.observe(card);
    });
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

  healthcareData: MainTemplateData = {
    sectionOneText: '',
    sectionTwoText: 'Our purpose has always been client centricity',
    sectionThreeText:
      'A lean & responsive management, a team that’s invested in client’s success, consultants consistently developing subject matter expertise and a leadership that’s focused on quality & timely delivery than selling new services.',
    heroImage: 'assets/images/abtus.png',
    solutionsHeading: 'Streamline operations, Ensure compliance, and Enhance outcomes',
    rightHeroImage: 'assets/images/happy_people3.png',
    features: [],
    industries: [],
    solutions: []
  };
}
