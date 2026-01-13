import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTopBannerComponent } from './health-top-banner.component';

describe('HealthTopBannerComponent', () => {
  let component: HealthTopBannerComponent;
  let fixture: ComponentFixture<HealthTopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthTopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
