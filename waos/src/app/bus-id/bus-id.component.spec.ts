import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusIdComponent } from './bus-id.component';

describe('BusIdComponent', () => {
  let component: BusIdComponent;
  let fixture: ComponentFixture<BusIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
