import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticlescardComponent } from './articlescard.component';

describe('ArticlescardComponent', () => {
  let component: ArticlescardComponent;
  let fixture: ComponentFixture<ArticlescardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlescardComponent]
    });
    fixture = TestBed.createComponent(ArticlescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
