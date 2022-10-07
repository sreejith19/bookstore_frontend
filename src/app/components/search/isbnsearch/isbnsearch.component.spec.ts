import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbnsearchComponent } from './isbnsearch.component';

describe('IsbnsearchComponent', () => {
  let component: IsbnsearchComponent;
  let fixture: ComponentFixture<IsbnsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsbnsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsbnsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
