import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasimComponent } from './wasim.component';

describe('WasimComponent', () => {
  let component: WasimComponent;
  let fixture: ComponentFixture<WasimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
