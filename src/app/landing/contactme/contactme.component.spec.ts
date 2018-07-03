import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contactmeComponent } from './contactme.component';

describe('contactmeComponent', () => {
  let component: contactmeComponent;
  let fixture: ComponentFixture<contactmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contactmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
