import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alegria } from './alegria';

describe('Alegria', () => {
  let component: Alegria;
  let fixture: ComponentFixture<Alegria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alegria],
    }).compileComponents();

    fixture = TestBed.createComponent(Alegria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
