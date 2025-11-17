import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReferenceComponent } from './hr-reference.component';

describe('HrReferenceComponent', () => {
  let component: HrReferenceComponent;
  let fixture: ComponentFixture<HrReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrReferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
