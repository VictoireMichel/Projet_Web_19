import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSupComponent } from './news-sup.component';

describe('NewsSupComponent', () => {
  let component: NewsSupComponent;
  let fixture: ComponentFixture<NewsSupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
