import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacturaComponent } from './factura-edit-admin-routed.component';

describe('EditFacturaComponent', () => {
  let component: EditFacturaComponent;
  let fixture: ComponentFixture<EditFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
