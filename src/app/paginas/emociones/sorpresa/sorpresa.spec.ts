import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sorpresa } from './sorpresa';

describe('Sorpresa', () => {
  let component: Sorpresa;
  let fixture: ComponentFixture<Sorpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sorpresa],
    }).compileComponents();

    fixture = TestBed.createComponent(Sorpresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
