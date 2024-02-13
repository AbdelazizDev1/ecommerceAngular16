import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScategorieComponent } from './edit-scategorie.component';

describe('EditScategorieComponent', () => {
  let component: EditScategorieComponent;
  let fixture: ComponentFixture<EditScategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditScategorieComponent]
    });
    fixture = TestBed.createComponent(EditScategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
