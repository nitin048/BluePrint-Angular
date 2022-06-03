import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselConfig } from './carousel-config.component';

describe('CarouselConfigComponent', () => {
  let component: NgbdCarouselConfig;
  let fixture: ComponentFixture<NgbdCarouselConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdCarouselConfig ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
