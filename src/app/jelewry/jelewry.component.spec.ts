import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelewryComponent } from './jelewry.component';

describe('JelewryComponent', () => {
  let component: JelewryComponent;
  let fixture: ComponentFixture<JelewryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JelewryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JelewryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
