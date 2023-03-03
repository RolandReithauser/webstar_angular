import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyertesComponent } from './nyertes.component';

describe('NyertesComponent', () => {
  let component: NyertesComponent;
  let fixture: ComponentFixture<NyertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyertesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
