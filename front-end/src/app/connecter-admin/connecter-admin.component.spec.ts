import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecterAdminComponent } from './connecter-admin.component';

describe('ConnecterAdminComponent', () => {
  let component: ConnecterAdminComponent;
  let fixture: ComponentFixture<ConnecterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

 */
});
