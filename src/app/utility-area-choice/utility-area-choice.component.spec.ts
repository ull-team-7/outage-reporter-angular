import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityAreaChoiceComponent } from './utility-area-choice.component';

describe('UtilityAreaChoiceComponent', () => {
  let component: UtilityAreaChoiceComponent;
  let fixture: ComponentFixture<UtilityAreaChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityAreaChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityAreaChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
