import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calma } from './calma';

describe('Calma', () => {
  let component: Calma;
  let fixture: ComponentFixture<Calma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calma],
    }).compileComponents();

    fixture = TestBed.createComponent(Calma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
