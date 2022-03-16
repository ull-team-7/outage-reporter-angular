import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOutageComponent } from './view-outage.component';

describe('ViewOutageComponent', () => {
  let component: ViewOutageComponent;
  let fixture: ComponentFixture<ViewOutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOutageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
