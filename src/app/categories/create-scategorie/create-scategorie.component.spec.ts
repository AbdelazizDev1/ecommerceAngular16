import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScategorieComponent } from './create-scategorie.component';

describe('CreateScategorieComponent', () => {
  let component: CreateScategorieComponent;
  let fixture: ComponentFixture<CreateScategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateScategorieComponent]
    });
    fixture = TestBed.createComponent(CreateScategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
