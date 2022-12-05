import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecontratsComponent } from './managecontrats.component';

describe('ManagecontratsComponent', () => {
  let component: ManagecontratsComponent;
  let fixture: ComponentFixture<ManagecontratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecontratsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecontratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
