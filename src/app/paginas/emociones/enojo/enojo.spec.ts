import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enojo } from './enojo';

describe('Enojo', () => {
  let component: Enojo;
  let fixture: ComponentFixture<Enojo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enojo],
    }).compileComponents();

    fixture = TestBed.createComponent(Enojo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
