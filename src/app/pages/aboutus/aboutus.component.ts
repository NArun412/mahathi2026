import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
 constructor(private router: Router) { }

  ngOnInit(): void {
 
    if(this.router.url =="/about/founders"){
      window.scroll(0 ,2500);
    }

  

  }
ngAfterViewInit(): void {
  setTimeout(() => {
    window.scrollTo({
      top: 30, // adjust for 3rd line
      behavior: 'smooth'
    });
  }, 200);
}

}
