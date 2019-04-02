import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPostsAddComponent } from './news-posts-add.component';

describe('NewsPostsAddComponent', () => {
  let component: NewsPostsAddComponent;
  let fixture: ComponentFixture<NewsPostsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPostsAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPostsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
