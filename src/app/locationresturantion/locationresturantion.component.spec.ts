import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationresturantionComponent } from './locationresturantion.component';

describe('LocationresturantionComponent', () => {
  let component: LocationresturantionComponent;
  let fixture: ComponentFixture<LocationresturantionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationresturantionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationresturantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
