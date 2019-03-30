import { Component, Input, OnInit } from '@angular/core';
import { NewsPost } from '../../shared/models/news-post.model';

@Component({
  selector: 'app-news-posts',
  templateUrl: './news-posts.component.html',
  styleUrls: ['./news-posts.component.scss']
})
export class NewsPostsComponent implements OnInit {
  @Input() newsPosts: NewsPost[];

  constructor() {}

  ngOnInit() {}
}
