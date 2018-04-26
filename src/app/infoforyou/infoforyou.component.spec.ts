import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoforyouComponent } from './infoforyou.component';

describe('InfoforyouComponent', () => {
  let component: InfoforyouComponent;
  let fixture: ComponentFixture<InfoforyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoforyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoforyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
