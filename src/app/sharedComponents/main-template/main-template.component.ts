import { Component, Input } from '@angular/core';
import { MainTemplateData } from './main-template.model';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent {
  @Input() pageData!: MainTemplateData;

}
