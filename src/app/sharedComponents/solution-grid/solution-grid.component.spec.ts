import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionGridComponent } from './solution-grid.component';

describe('SolutionGridComponent', () => {
  let component: SolutionGridComponent;
  let fixture: ComponentFixture<SolutionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SolutionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
