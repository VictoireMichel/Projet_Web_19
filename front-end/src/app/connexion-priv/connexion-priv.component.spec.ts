import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPrivComponent } from './connexion-priv.component';

describe('ConnexionPrivComponent', () => {
  let component: ConnexionPrivComponent;
  let fixture: ComponentFixture<ConnexionPrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionPrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
