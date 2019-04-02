import { Component, Input, OnInit } from '@angular/core';
import { NewsPost } from '../../shared/models/news-post.model';

@Component({
  selector: 'app-news-posts',
  templateUrl: './news-posts.component.html',
  styleUrls: ['./news-posts.component.scss']
})
export class NewsPostsComponent implements OnInit {
  showOld = false;

  @Input() newsPosts: NewsPost[];

  constructor() {}

  ngOnInit() {}

  get newsPostsFiltered(): NewsPost[] {
    if (this.showOld) {
      return this.newsPosts;
    } else {
      return this.newsPosts.slice(0, 5);
    }
  }

  get postsFooterText(): string {
    return this.showOld ? 'Hide old posts' : 'Show old posts';
  }

  toggleOld(): void {
    this.showOld = !this.showOld;
  }
}
