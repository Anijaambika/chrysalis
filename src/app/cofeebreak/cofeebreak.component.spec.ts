import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeebreakComponent } from './cofeebreak.component';

describe('CofeebreakComponent', () => {
  let component: CofeebreakComponent;
  let fixture: ComponentFixture<CofeebreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofeebreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeebreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
