import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nostalgia } from './nostalgia';

describe('Nostalgia', () => {
  let component: Nostalgia;
  let fixture: ComponentFixture<Nostalgia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nostalgia],
    }).compileComponents();

    fixture = TestBed.createComponent(Nostalgia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
