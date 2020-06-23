import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollabTabComponent } from './scrollab-tab.component';

describe('ScrollabTabComponent', () => {
  let component: ScrollabTabComponent;
  let fixture: ComponentFixture<ScrollabTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollabTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollabTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
