import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarakterszerkComponent } from './karakterszerk.component';

describe('KarakterszerkComponent', () => {
  let component: KarakterszerkComponent;
  let fixture: ComponentFixture<KarakterszerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarakterszerkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarakterszerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
