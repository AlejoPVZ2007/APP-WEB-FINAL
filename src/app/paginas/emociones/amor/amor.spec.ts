import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amor } from './amor';

describe('Amor', () => {
  let component: Amor;
  let fixture: ComponentFixture<Amor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Amor],
    }).compileComponents();

    fixture = TestBed.createComponent(Amor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
