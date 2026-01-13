import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

interface Leader {
  id: number;
  filename: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {}

  leadershipRows = [
  { id: 1, filename: 'anand1.png', name: 'Anand Mahalingham', title: 'Senior Vice President & Client Partner – Insurance', description: 'Dummy description', link: '#' },
  { id: 2, filename: 'Harish.png', name: 'Harish R', title: 'Vice President & Client Partner – Legal & ManLog', description: 'Dummy description', link: '#' },
  { id: 3, filename: 'pamela1.png', name: 'Pam Bogdanovich', title: 'Client Engagement Director', description: 'Dummy description', link: '#' },
  { id: 4, filename: 'Tracey.png', name: 'Tracey Seals', title: 'Client Engagement Director', description: 'Dummy description', link: '#' },

  { id: 5, filename: 'ed_caldwell.png', proves: 'you must add image', name: 'Ed Caldwell', title: 'Client Engagement', description: 'Dummy description', link: '#' },
  { id: 6, filename: 'kathy_macdonald.png', name: 'Kathy MacDonald', title: 'Client Engagement Manager', description: 'Dummy description', link: '#' },
  { id: 7, filename: 'michael_reynolds.png', name: 'Michael Reynolds', title: 'Director of Sales', description: 'Dummy description', link: '#' },

  { id: 8, filename: 'ganesan.png', name: 'Ganesan Durairaj', title: 'Senior Vice President', description: 'Dummy description', link: '#' },
  { id: 9, filename: 'niru.png', name: 'Nirupama Rajendran', title: 'Head of Business Consulting – Insurance', description: 'Dummy description', link: '#' },
  { id: 10, filename: 'pranesh.png', name: 'Pranesh Mahendran', title: 'Delivery Partner - Insurance', description: 'Dummy description', link: '#' },
  { id: 11, filename: 'sukumar3.png', name: 'Sukumar Karuppusamy', title: 'Technology Partner - Insurance', description: 'Dummy description', link: '#' },
  { id: 12, filename: 'J7.png', name: 'Jerry Gonsel', title: 'Head of Operations', description: 'Dummy description', link: '#' },
  { id: 13, filename: 'dhy_main.png', name: 'Dhyanesh Mahendran', title: 'Head of Infrastructure & Business Process Management', description: 'Dummy description', link: '#' },
  { id: 14, filename: 'santhosh.png', name: 'Santhosh Kumar', title: 'Head of Technology Incubation & Innovation', description: 'Dummy description', link: '#' },
  { id: 15, filename: 'thani.png', name: 'Thanikaivel Ekambaram', title: 'Head of Information Security', description: 'Dummy description', link: '#' },
  { id: 16, filename: 'rajkumar.png', name: 'Rajkumar Kanagaraju', title: 'Head of Quality Assurance & Automation', description: 'Dummy description', link: '#' },
  { id: 17, filename: 'dominic.png', name: 'Dominic Lintan', title: 'Manager & Lead, Philippines Operations', description: 'Dummy description', link: '#' },
  { id: 18, filename: 'petite.png', name: 'Petite Apostol', title: 'Lead Quality Assurance Engineer', description: 'Dummy description', link: '#' }
];


  // IMPORTANT for DOM stability (hover / animation / CSS consistency)
  trackById(index: number, item: Leader): number {
    return item.id;
  }

  ngOnInit(): void {
    if (this.router.url === '/about/founders') {
      window.scroll(0, 2500);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({
        top: 30,
        behavior: 'smooth'
      });
    }, 200);
  }
}