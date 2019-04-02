import { Component, Input, OnInit } from '@angular/core';
import { NewsPost } from '../../shared/models/news-post.model';

@Component({
  selector: 'app-news-posts-list',
  templateUrl: './news-posts-list.component.html',
  styleUrls: ['./news-posts-list.component.scss']
})
export class NewsPostsListComponent implements OnInit {
  @Input() newsPosts: NewsPost[];

  constructor() {}

  ngOnInit() {}
}
