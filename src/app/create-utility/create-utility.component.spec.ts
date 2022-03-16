import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtilityComponent } from './create-utility.component';

describe('CreateUtilityComponent', () => {
  let component: CreateUtilityComponent;
  let fixture: ComponentFixture<CreateUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
