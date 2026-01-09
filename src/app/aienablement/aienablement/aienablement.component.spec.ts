import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AienablementComponent } from './aienablement.component';

describe('AienablementComponent', () => {
  let component: AienablementComponent;
  let fixture: ComponentFixture<AienablementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AienablementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AienablementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
