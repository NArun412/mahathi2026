import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

export type DashboardGridItem = | { type: "image"; image: string } | { type: "card"; label: string; link?: string; color?: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  currentTabIndex = 0;

  dashboardTabs = [
    { label: 'WORKERS COMP', active: true },
    { label: 'P&C AND LIFE' },
    { label: 'PAYOR AND PBM' },
    { label: 'MAILROOM SOLUTION' },
    { label: 'WORKBENCH SOLUTIONS' },
    { label: 'WORKCOMP COMPLIANCE' }
  ];

  dashboardHeading = '';
  dashboardGridItems: DashboardGridItem[] = [];

  dashboardHeadingMap: Record<number, string> = {
    0: 'We bring over a decade of deep Workers’ Comp expertise supporting 30+ carriers',
    1: 'Combining broad experience across the insurance value chain and exceptional technical capabilities',
    2: 'Bringing deep experience in Payor and PBM domains, delivering solutions across claims processing',
    3: 'Delivered unified insurance portals streamlining experiences for Underwriters, Policyholders, Agents, Providers, and Third Parties',
    4: 'Helping claims examiners and supervisors manage total claims expenses across claims and files',
    5: 'A modular, à la carte regulatory and compliance practice purpose-built for Workers’ Compensation carriers, TPAs, self-insureds, MGAs'
  };

  dashboardGridMap: Record<number, DashboardGridItem[]> = {
    0: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ],
    1: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ],
    2: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ],
    3: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ],
    4: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ],
    5: [
      { type: 'image', image: 'assets/images/workers_comp_1.jpg' },
      { type: 'card', label: 'Carrier Enablement at Scale', link: '#', color: '#f5f5f5' },
      { type: 'image', image: 'assets/images/workers_comp_2.jpg' },
      { type: 'card', label: 'Policy Administration', link: '#', color: '#e8f0fe' },
      { type: 'image', image: 'assets/images/workers_comp_3.jpg' },
      { type: 'card', label: 'Billing Solutions', link: '#', color: '#fff3e0' },
      { type: 'card', label: 'Claims Management', link: '#', color: '#e0f7fa' },
      { type: 'image', image: 'assets/images/workers_comp_4.jpg' },
      { type: 'card', label: 'Investigative Services', link: '#', color: '#fce4ec' },
      { type: 'image', image: 'assets/images/workers_comp_5.jpg' },
      { type: 'card', label: 'Medical & Pharmacy Management', link: '#', color: '#f3e5f5' },
      { type: 'image', image: 'assets/images/workers_comp_6.jpg' },
      { type: 'image', image: 'assets/images/workers_comp_7.jpg' },
      { type: 'card', label: 'Litigation Management', link: '#', color: '#ede7f6' },
      { type: 'image', image: 'assets/images/workers_comp_8.jpg' },
      { type: 'card', label: 'Regulatory & Compliance', link: '#', color: '#e0f2f1' },
      { type: 'image', image: 'assets/images/workers_comp_9.jpg' },
      { type: 'card', label: 'Loss Control Services', link: '#', color: '#fffde7' }
    ]
  };

  onTabChange(idx: number) {
    this.setTab(idx);
  }

  setTab(idx: number) {
    this.currentTabIndex = idx;
    this.dashboardTabs.forEach((tab, i) => tab.active = i === idx);
    this.dashboardHeading = this.dashboardHeadingMap[idx];
    this.dashboardGridItems = this.dashboardGridMap[idx];
  }

  goToPreviousTab() {
    if (this.currentTabIndex > 0) {
      this.setTab(this.currentTabIndex - 1);
    } else {
      // wrap around to last tab
      this.setTab(this.dashboardTabs.length - 1);
    }
  }

  goToNextTab() {
    if (this.currentTabIndex < this.dashboardTabs.length - 1) {
      this.setTab(this.currentTabIndex + 1);
    } else {
      // wrap around to first tab
      this.setTab(0);
    }
  }


  ngAfterViewInit(): void {
    this.setTab(0);
    this.setupVideo();
    setTimeout(() => {
      this.initSlider();
    }, 250);
  }

  ngOnDestroy(): void {
    const slider = $('.slick-track-container');
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  }


  setupVideo() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true;
      video.playbackRate = 0.5;

      video.play().catch(err => {
        console.warn("Autoplay failed:", err);
      });
    }
  }

  initSlider() {
    const solutionsSlider = $('.slick-track-container');
    const bannerSlider = $('.banner-carousel-item-inner');
    if (solutionsSlider.hasClass('slick-initialized')) {
      solutionsSlider.slick('unslick');
    }
    if (bannerSlider.hasClass('slick-initialized')) {
      bannerSlider.slick('unslick');
    }
    solutionsSlider.slick({
      prevArrow: $('[solution-arrow-left]'),
      nextArrow: $('[solution-arrow-right]'),
      cssEase: 'linear',
      autoplay: false,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: false
    });
    bannerSlider.slick({
      prevArrow: $('[solution-arrow-left]'),
      nextArrow: $('[solution-arrow-right]'),
      cssEase: 'linear',
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4590,
      infinite: true,
      slidesToShow: 1,
      variableWidth: false,
      adaptiveHeight: false,
      fade: true,
      pauseOnHover: false,
      pauseOnFocus: false
    });
    bannerSlider.on('beforeChange', (event: any, slick: any, currentSlide: number, nextSlide: number) => {
      let nextDuration: number;
      switch (nextSlide) {
        case 0: nextDuration = 4590; break;
        case 1: nextDuration = 6830; break;
        case 2: nextDuration = 3600; break;
        default: nextDuration = 4000;
      }
      bannerSlider.slick('slickSetOption', 'autoplaySpeed', nextDuration);
    });
    $('.slide-indexer').removeClass('activeSlideTab');
    $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
    $('.service-promotion-title').text('OUR SOLUTIONS');


    $('#page-block-banner-carousel').show().css({
      'visibility': 'visible',
      'opacity': '1',
      'display': 'block'
    });
  }

  clickCarousel(count: string) {
    const slider = $('.slick-track-container');
    if (slider.hasClass('slick-initialized')) {
      slider.slick('slickGoTo', count);
      $('.slide-indexer').removeClass('activeSlideTab');
      $('.slide-indexer_' + count).addClass('activeSlideTab');
    }
  }

}