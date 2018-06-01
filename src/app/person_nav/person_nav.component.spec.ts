import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Person_navComponent } from './person_nav.component';

describe('Person_navComponent', () => {
  let component: Person_navComponent;
  let fixture: ComponentFixture<Person_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Person_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Person_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
