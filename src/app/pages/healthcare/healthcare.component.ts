import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

declare var $: any;

export type SolutionGridItem =
    | { type: 'image'; image: string }
    | { type: 'card'; label: string; link?: string; color?: string };

@Component({
    selector: 'app-healthcare',
    templateUrl: './healthcare.component.html',
    styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements AfterViewInit {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

    currentTabIndex = 0;

    healthcareTabs = [
        { label: 'Core Healthcare Platforms & Digital Experience', active: true },
        { label: 'Claims, Revenue & Financial Operations' },
        { label: 'Clinical, Pharmacy & Care Management' },
        { label: 'Data, AI, Compliance & Risk' }
    ];

    healthcareHeading = '';
    healthcareGridItems: SolutionGridItem[] = [];

    healthcareHeadingMap: Record<number, string> = {
        0: 'Enrollment, core administration systems, and member/patient engagement platforms.',
        1: 'Claims processing, billing, payments, and revenue optimization across the healthcare lifecycle.',
        2: 'Utilization management, care coordination, pharmacy operations, and value-based care enablement.',
        3: 'Regulatory compliance, fraud detection, analytics, AI-driven automation, and secure interoperability.'
    };

    healthcareGridMap: Record<number, SolutionGridItem[]> = {
        0: [
            { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
            { type: 'card', label: 'Member & Patient Administration', link: '#/healthcare/member-patient-administration', color: '#e8f5e9' }, // soft green
            { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
            { type: 'card', label: 'Core Administration Platforms', link: '#/healthcare/core-administration-platforms', color: '#fff3e0' } // soft orange
        ],
        1: [
            { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
            { type: 'card', label: 'Claims Management', link: '#/healthcare/claims-management', color: '#e3f2fd' }, // soft blue
            { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
            { type: 'card', label: 'Medical Management', link: '#/healthcare/medical-management', color: '#fce4ec' } // soft pink
        ],
        2: [
            { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
            { type: 'card', label: 'Pharmacy Benefits Management (PBM)', link: '#/healthcare/pharmacy-benefits-management', color: '#f3e5f5' }, // soft purple
            { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
            { type: 'card', label: 'Revenue Cycle Management', link: '#/healthcare/revenue-cycle-management', color: '#e0f7fa' } // soft cyan
        ],
        3: [
            { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
            { type: 'card', label: 'Compliance & Regulatory Services', link: '#/healthcare/compliance-regulatory-services', color: '#ede7f6' }, // lavender
            { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
            { type: 'card', label: 'Fraud, Waste & Abuse (FWA)', link: '#/healthcare/fraud-waste-abuse', color: '#fffde7' }, // pale yellow
            { type: 'card', label: 'Value-Based Care & Analytics', link: '#/healthcare/value-based-care-analytics', color: '#f1f8e9' },
            { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
            { type: 'card', label: 'Digital & AI Enablement', link: '#/healthcare/digital-ai-enablement', color: '#e0f2f1' },
            { type: 'image', image: 'assets/images/workers_comp_1.jpg' }
        ]
    };


    ngAfterViewInit(): void {
        this.healthcareHeading = this.healthcareHeadingMap[0];
        this.healthcareGridItems = this.healthcareGridMap[0];
        this.initSlider();
          this.registerPageContent();
    }


    

constructor(
  private searchService: GlobalSearchService,
  private router: Router
) {}


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

    onHealthcareTabChange(idx: number) {
        this.setTab(idx);
    }

    setTab(idx: number) {
        this.currentTabIndex = idx;
        this.healthcareTabs.forEach((tab, i) => tab.active = i === idx);
        this.healthcareHeading = this.healthcareHeadingMap[idx];
        this.healthcareGridItems = this.healthcareGridMap[idx];
    }

    goToPreviousTab() {
        if (this.currentTabIndex > 0) {
            this.setTab(this.currentTabIndex - 1);
        } else {
            this.setTab(this.healthcareTabs.length - 1);
        }
    }

    goToNextTab() {
        if (this.currentTabIndex < this.healthcareTabs.length - 1) {
            this.setTab(this.currentTabIndex + 1);
        } else {
            this.setTab(0);
        }
    }


    initSlider() {
        $('.slick-track-container')
            .slick({
                prevArrow: $('[solution-arrow-left]'),
                nextArrow: $('[solution-arrow-right]'),
                cssEase: 'linear',
                autoplay: false,
                swipeToSlide: true,
                infinite: true,
                slidesToShow: 1
            })
            .on('beforeChange', function () { });

        $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
        $('.service-promotion-title').text('OUR SOLUTIONS');
    }

    clickCarousel(count: string) {
        $('.slick-track-container').slick('slickGoTo', count);
        $('.slide-indexer').removeClass('activeSlideTab');
        $('.slide-indexer_' + count).addClass('activeSlideTab');
    }
}