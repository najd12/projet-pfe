import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionRegionalModalComponent } from './direction-regional-modal.component';

describe('DirectionRegionalModalComponent', () => {
  let component: DirectionRegionalModalComponent;
  let fixture: ComponentFixture<DirectionRegionalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionRegionalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionRegionalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
