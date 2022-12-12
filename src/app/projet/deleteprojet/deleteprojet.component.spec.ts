import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprojetComponent } from './deleteprojet.component';

describe('DeleteprojetComponent', () => {
  let component: DeleteprojetComponent;
  let fixture: ComponentFixture<DeleteprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
