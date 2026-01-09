import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css']
})
export class SolutionGridComponent {
  // Top options (tabs)
  @Input() options: { label: string, active?: boolean }[] = [];
  // Heading below the options
  @Input() heading: string = '';
  // Grid items (cards/boxes)
  @Input() gridItems: ({ type: 'image', image: string } | { type: 'card', label: string, link?: string, color?: string })[] = [];
  // Optionally emit when an option is selected
  @Output() optionSelected = new EventEmitter<number>();

  selectOption(idx: number) {
    this.optionSelected.emit(idx);
  }
}
