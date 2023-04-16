import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfilePictureComponent } from './set-profile-picture.component';

describe('SetProfilePictureComponent', () => {
  let component: SetProfilePictureComponent;
  let fixture: ComponentFixture<SetProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProfilePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
