import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';

type SliderKey = 'slider1' | 'slider3' | 'slider5';

interface SliderState {
  images: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  linkedinUrl_moremoneyformorekids =
    'https://www.linkedin.com/posts/mahathiinfo_moremoneyformorekids-kidschanceofamerica-activity-7390525761897799680-OffL?utm_source=share&utm_medium=member_desktop';

  linkedinUrl_philadelphia100 =
    'https://www.linkedin.com/posts/mahathiinfo_were-thrilled-to-share-that-mahathi-has-activity-7396595504119324672-br9u?utm_source=share&utm_medium=member_desktop';

  linkedinUrl_workerscomp =
    'https://www.linkedin.com/posts/mahathiinfo_workerscomp-insurtech-aiininsurance-activity-7334652260670455808-I2b0?utm_source=share&utm_medium=member_desktop';

  linkedinUrl_inc5000 =
    'https://www.linkedin.com/posts/mahathiinfo_inc5000-clienttrust-proudteam-activity-7361161953504858115-bgb3?utm_source=share&utm_medium=member_desktop';

  linkedinUrl_fast50 =
    'https://www.linkedin.com/posts/mahathiinfo_mahathiinfotech-fast50-growthwithgratitude-activity-7380417675547676672-3Ovn?utm_source=share&utm_medium=member_desktop';

  imageWidth = 300;
  autoSlideIntervals: number[] = [];

  sliders: Record<SliderKey, SliderState> = {
    slider1: {
      images: [
        'assets/images/blog 1.1.jpg',
        'assets/images/blog 1.2.jpg',
        'assets/images/blog 1.3.jpg',
        'assets/images/blog 1.4.jpg',
        'assets/images/blog 1.5.jpg'
      ],
      currentIndex: 0
    },

    slider3: {
      images: [
        'assets/images/blog 3.1.jpg',
        'assets/images/blog 3.2.jpg',
        'assets/images/blog 3.3.jpg',
        'assets/images/blog 3.4.jpg'
      ],
      currentIndex: 0
    },

    slider5: {
      images: [
        'assets/images/blog 5.1.jpg',
        'assets/images/blog 5.2.jpg',
        'assets/images/blog 5.3.jpg',
        'assets/images/blog 5.4.jpg'
      ],
      currentIndex: 0
    }
  };

  ngOnInit(): void {
    (Object.keys(this.sliders) as SliderKey[]).forEach(key => {
      const interval = window.setInterval(() => {
        this.next(key);
      }, 5000);

      this.autoSlideIntervals.push(interval);
    });
  }


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

  ngOnDestroy(): void {
    this.autoSlideIntervals.forEach(id => clearInterval(id));
  }

  next(key: SliderKey): void {
    const slider = this.sliders[key];
    slider.currentIndex =
      (slider.currentIndex + 1) % slider.images.length;
  }

  prev(key: SliderKey): void {
    const slider = this.sliders[key];
    slider.currentIndex =
      (slider.currentIndex - 1 + slider.images.length) % slider.images.length;
  }
}
