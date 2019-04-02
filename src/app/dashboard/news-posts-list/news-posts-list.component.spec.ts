import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPostsListComponent } from './news-posts-list.component';

describe('NewsPostsListComponent', () => {
  let component: NewsPostsListComponent;
  let fixture: ComponentFixture<NewsPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPostsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
