import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeappComponent } from './bikeapp.component';

describe('BikeappComponent', () => {
  let component: BikeappComponent;
  let fixture: ComponentFixture<BikeappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
