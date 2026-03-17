import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tristeza } from './tristeza';

describe('Tristeza', () => {
  let component: Tristeza;
  let fixture: ComponentFixture<Tristeza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tristeza],
    }).compileComponents();

    fixture = TestBed.createComponent(Tristeza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
