import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOilComponent } from './add-oil.component';

describe('AddOilComponent', () => {
  let component: AddOilComponent;
  let fixture: ComponentFixture<AddOilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
