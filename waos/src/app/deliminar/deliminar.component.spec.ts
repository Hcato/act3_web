import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliminarComponent } from './deliminar.component';

describe('DeliminarComponent', () => {
  let component: DeliminarComponent;
  let fixture: ComponentFixture<DeliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
