import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategorieComponent } from './createcategorie.component';

describe('CreatecategorieComponent', () => {
  let component: CreatecategorieComponent;
  let fixture: ComponentFixture<CreatecategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecategorieComponent]
    });
    fixture = TestBed.createComponent(CreatecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
