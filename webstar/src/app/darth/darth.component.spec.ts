import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarthComponent } from './darth.component';

describe('DarthComponent', () => {
  let component: DarthComponent;
  let fixture: ComponentFixture<DarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
