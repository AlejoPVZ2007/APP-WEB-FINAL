import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miedo } from './miedo';

describe('Miedo', () => {
  let component: Miedo;
  let fixture: ComponentFixture<Miedo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miedo],
    }).compileComponents();

    fixture = TestBed.createComponent(Miedo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
