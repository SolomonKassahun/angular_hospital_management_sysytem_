import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoristPageComponent } from './laboratorist-page.component';

describe('LaboratoristPageComponent', () => {
  let component: LaboratoristPageComponent;
  let fixture: ComponentFixture<LaboratoristPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoristPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoristPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
