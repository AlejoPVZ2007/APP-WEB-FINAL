import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confianza } from './confianza';

describe('Confianza', () => {
  let component: Confianza;
  let fixture: ComponentFixture<Confianza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confianza],
    }).compileComponents();

    fixture = TestBed.createComponent(Confianza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
