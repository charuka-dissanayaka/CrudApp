import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSerComponent } from './edit-ser.component';

describe('EditSerComponent', () => {
  let component: EditSerComponent;
  let fixture: ComponentFixture<EditSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
