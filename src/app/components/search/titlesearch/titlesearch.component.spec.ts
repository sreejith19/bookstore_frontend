import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesearchComponent } from './titlesearch.component';

describe('TitlesearchComponent', () => {
  let component: TitlesearchComponent;
  let fixture: ComponentFixture<TitlesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
