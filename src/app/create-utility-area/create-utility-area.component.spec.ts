import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilityAreaComponent } from './create-utility-area.component';

describe('CreateUtilityAreaComponent', () => {
  let component: CreateUtilityAreaComponent;
  let fixture: ComponentFixture<CreateUtilityAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUtilityAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilityAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
