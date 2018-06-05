import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGamePublishedComponent } from './person-game-published.component';

describe('PersonGameListDrawComponent', () => {
  let component: PersonGamePublishedComponent;
  let fixture: ComponentFixture<PersonGamePublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonGamePublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGamePublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
