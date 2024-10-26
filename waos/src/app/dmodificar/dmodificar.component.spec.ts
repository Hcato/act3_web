import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmodificarComponent } from './dmodificar.component';

describe('DmodificarComponent', () => {
  let component: DmodificarComponent;
  let fixture: ComponentFixture<DmodificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmodificarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
